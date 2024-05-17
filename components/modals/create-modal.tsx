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
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";

import { useCreateModal } from "@/hooks/use-create-modal";
import { patientSchema } from "@/schemas";

export const CreateModal = () => {
  const createModal = useCreateModal();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof patientSchema>>({
    resolver: zodResolver(patientSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const onCancel = () => {
    createModal.onClose();
    form.reset();
    router.refresh();
  };

  const onSubmit = async (values: z.infer<typeof patientSchema>) => {
    try {
      setIsLoading(true);
      await axios.post("/api/patients", values);
      toast.success("Patient is added");
      onCancel();
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      title="Add a new patient"
      description="You can added a new patient to dashboard."
      isOpen={createModal.isOpen}
      onClose={createModal.onClose}
    >
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
              Add
            </Button>
          </div>
        </form>
      </Form>
    </Modal>
  );
};
