"use client";

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

import { useCreatePerson } from "@/hooks/use-create-person";
import { personSchema } from "@/schemas";

export const CreatePerson = () => {
  const personModal = useCreatePerson();

  const form = useForm<z.infer<typeof personSchema>>({
    resolver: zodResolver(personSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = (values: z.infer<typeof personSchema>) => {
    console.log(values);
  };

  return (
    <Modal
      title="Add a new person"
      description="You can added a new person to dashboard."
      isOpen={personModal.isOpen}
      onClose={personModal.onClose}
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
                  <Input placeholder="name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="pt-6 w-full flex justify-end items-center gap-x-4">
            <Button
              type="button"
              variant="outline"
              onClick={personModal.onClose}
            >
              Cancel
            </Button>
            <Button type="submit">Continue</Button>
          </div>
        </form>
      </Form>
    </Modal>
  );
};
