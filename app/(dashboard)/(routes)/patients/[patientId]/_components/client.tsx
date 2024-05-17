"use client";

import axios from "axios";
import { toast } from "sonner";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";

import { patientSchema } from "@/schemas";
import { Patients } from "@prisma/client";

export const PatientClient = ({
  initialData,
}: {
  initialData: Patients | null;
}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof patientSchema>>({
    resolver: zodResolver(patientSchema),
    defaultValues: {
      name: initialData?.name || "",
      email: initialData?.email || "",
    },
  });

  const onCancel = () => {
    form.reset();
    router.refresh();
    router.push("/patients");
  };

  const onSubmit = async (values: z.infer<typeof patientSchema>) => {
    try {
      setIsLoading(true);
      await axios.patch(`/api/patients/${initialData?.id}`, values);
      toast.success("Info patient is update");
      onCancel();
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <Heading
        title="Update Info Patient"
        description="You can edit information patient easily."
      />
      <Separator />
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input disabled={isLoading} placeholder="name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      type="email"
                      placeholder="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="pt-6 w-full flex justify-end items-center gap-x-4">
              <Button
                disabled={isLoading}
                type="button"
                variant="outline"
                onClick={onCancel}
              >
                Cancel
              </Button>
              <Button disabled={isLoading} type="submit">
                Update
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};
