"use client";

import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PiMountainsThin } from "react-icons/pi";

import { Building2, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getVendors } from "@/api/apiEndpoints";

// 🔥 Schema
const deliveryFormSchema = z.object({
  name: z.string().min(1, "Vendor name is required"),
  location: z.string().min(1, "Location is required"),
  phone: z.string().min(1, "Phone number is required"),
  email: z.string().email("Invalid email address"),
  addToVendorList: z.boolean(),
});

type DeliveryFormData = z.infer<typeof deliveryFormSchema>;



// Define form field config type
type FormFieldConfig<T extends keyof DeliveryFormData> = {
  name: T;
  label: string;
  placeholder: string;
  icon: React.ReactNode;
  type?: "text" | "email" | "tel";
};

export default function DeliveryForm() {
  const [selectedVendor, setSelectedVendor] = useState<string>("");

  const form = useForm<DeliveryFormData>({
    resolver: zodResolver(deliveryFormSchema),
    defaultValues: {
      name: "",
      location: "",
      phone: "",
      email: "",
      addToVendorList: false,
    },
  });

  const { data } = useQuery({
    queryKey: ["user-vendors"],
    queryFn: getVendors,
  });

  console.log(data)

  const handleVendorChange = (value: string) => {
    setSelectedVendor(value);
    const vendor = data?.results.find( vendor => vendor.vendor_id === value ) 
    if (data) {
      form.reset(vendor);
    } else {
      form.reset({
        name: "",
        location: "",
        phone: "",
        email: "",
        addToVendorList: false,
      });
    }
  };

  const onSubmit = (data: DeliveryFormData) => {
    console.log("Form submitted:", data);
  };

  // Define all input fields
  const inputFields: FormFieldConfig<
    Exclude<keyof DeliveryFormData, "addToVendorList">
  >[] = [
    {
      name: "name",
      label: "Vendor",
      placeholder: "Enter vendor's name",
      icon: <Building2 className="h-4 w-4 text-gray-500 pointer-events-none" />,
    },
    {
      name: "location",
      label: "Location",
      placeholder: "Vendor's location",
      icon: <MapPin className="h-4 w-4 text-gray-500 pointer-events-none" />,
    },
    {
      name: "phone",
      label: "Phone",
      placeholder: "Vendor's phone number",
      icon: <Phone className="h-4 w-4 text-gray-500 pointer-events-none" />,
      type: "tel",
    },
    {
      name: "email",
      label: "Email address",
      placeholder: "Vendor's email address",
      icon: <Mail className="h-4 w-4 text-gray-500 pointer-events-none" />,
      type: "email",
    },
  ];

  return (
    <div className="bg-[#F9F9F9] p-6 rounded-lg space-y-6">
      <h2 className="text-[24px]">Shop Details</h2>
      <div className="flex justify-center">
        <div className="size-[80px] bg-[#D0D3D199] rounded-full flex justify-center items-center">
          <PiMountainsThin className="text-[#8A908D] size-[28px]" />
        </div>
      </div>
      {/* Retail Shop List Selection */}
      <div>
        <Select onValueChange={handleVendorChange} value={selectedVendor}>
          <SelectTrigger className="w-fit p-3 py-[22px] border border-gray-200 rounded-lg text-[14px] bg-white shadow-none">
            <SelectValue placeholder="Select Retail Shop " />
          </SelectTrigger>
          <SelectContent>
            {data?.results?.map((vendor) => (
              <SelectItem key={vendor.id} value={vendor.vendor_id || vendor.id.toString() }>
                {vendor.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Dynamic Fields */}
          {inputFields.map((field) => (
            <FormField
              key={field.name}
              control={form.control}
              name={field.name}
              render={({ field: formField }) => (
                <FormItem>
                  <FormLabel className="block text-[12px] text-[#6E6E6E] mb-1">
                    {field.label}
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                        {field.icon}
                      </div>
                      <input
                        type={field.type || "text"}
                        placeholder={field.placeholder}
                        className="pl-10 w-full p-3 bg-[#F0F0F0] border border-gray-200 rounded-lg text-[14px] placeholder:text-gray-400"
                        {...formField}
                        readOnly
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          {/* Checkbox */}
          <FormField
            control={form.control}
            name="addToVendorList"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="text-[14px] text-[#374151] cursor-pointer">
                  Add to Vendor list
                </FormLabel>
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Link to={`/partner/cart/checkout?vendor=${selectedVendor}`}>
            <Button
              disabled={form.formState.disabled}
              type="submit"
              className="w-full disabled:bg-primary/50 text-white py-3 rounded-lg text-[14px] font-medium"
            >
              Proceed
            </Button>
          </Link>
        </form>
      </Form>
    </div>
  );
}
