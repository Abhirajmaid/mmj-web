"use client";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/src/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form";
import { Input } from "@/src/components/ui/input";
import React from "react";
import Link from "next/link";

const formSchema = z.object({
  mobileNumber: z
    .string()
    .min(10, { message: "Mobile number must be at least 10 digits" })
    .max(15, { message: "Mobile number must be less than 15 digits" })
    .regex(/^[0-9]+$/, { message: "Mobile number can only contain digits" }),
});

const SigninForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mobileNumber: "",
    },
  });

  function onSubmit(values) {
    // updateMetalRateList();
    console.log(values);
  }

  return (
    <div>
      <div className="flex min-h-[90vh] bg-white">
        {/* Left Image Section */}
        <div className="w-[55%] min-h-full">
          <Image
            src="/contact_us.jpg" // Make sure to place the image in the public directory
            alt="Jewellery Model"
            className="object-cover w-full min-h-full"
            width={1500}
            height={1500}
          />
        </div>

        {/* Right Form Section */}
        <div className="w-[60%] flex flex-col justify-center px-16 pl-[80px]">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Log In</h2>
          <p className="text-gray-600 mb-12">Log In with OTP verification</p>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-5 w-[75%]"
            >
              <FormField
                control={form.control}
                name="mobileNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mobile Number (WhatsApp) *</FormLabel>
                    <FormControl>
                      <input
                        type="number"
                        placeholder="+91 7385302967"
                        {...field}
                        className="w-full px-4 !py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                variant="primary"
                className="w-[30%] bg-primary text-white py-6 rounded-lg hover:bg-primary-dark transition "
              >
                Log In
              </Button>

              <p className="text-start text-gray-600">
                Dodn't have an account?{" "}
                <Link href="/sign-up" className="text-primary">
                  Sign Up
                </Link>
              </p>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SigninForm;
