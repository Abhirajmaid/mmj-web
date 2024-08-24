"use client";
import { useEffect, useState } from "react";
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
import metalRateAction from "@/src/lib/action/metalRate.action";
import { SectionTitle } from "@/src/components";

const formSchema = z.object({
  gold24k: z.coerce.number().min(2),
  gold22k: z.coerce.number().min(2),
  gold18k: z.coerce.number().min(2),
  gold12k: z.coerce.number().min(2),
  silver: z.coerce.number().min(2),
});

const page = () => {
  const [data, setData] = useState();

  useEffect(() => {
    getRateList();
  }, []);

  const getRateList = () => {
    metalRateAction.getMetalRates().then((resp) => {
      setData(resp.data.data);
      console.log(resp.data.data);
    });
  };

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      gold24k: "",
      gold22k: "",
      gold18k: "",
      gold12k: "",
      silver: "",
    },
  });

  function onSubmit(values) {
    // updateMetalRateList();
    console.log(values);
  }

  return (
    <>
      <div>
        <SectionTitle title="Update Metal Rates." txtColor="black" />
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 pb-10 pt-14"
        >
          <FormField
            control={form.control}
            name="gold24k"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gold 24KT</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder={data && data[1]?.attributes?.rate}
                    {...field}
                  />
                </FormControl>
                <FormDescription>Type current 24KT metal rate.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="gold22k"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gold 22KT</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder={data && data[2]?.attributes?.rate}
                    {...field}
                  />
                </FormControl>
                <FormDescription>Type current 22KT metal rate.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="gold18k"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gold 18KT</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder={data && data[4]?.attributes?.rate}
                    {...field}
                  />
                </FormControl>
                <FormDescription>Type current 18KT metal rate.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="gold12k"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gold 12KT</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder={data && data[0]?.attributes?.rate}
                    {...field}
                  />
                </FormControl>
                <FormDescription>Type current 12KT metal rate.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="silver"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Silver</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder={data && data[3]?.attributes?.rate}
                    {...field}
                  />
                </FormControl>
                <FormDescription>Type current silver rate.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="bg-primary hover:bg-bg_dark hover:text-black text-white"
            variant="primary"
          >
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
};

export default page;
