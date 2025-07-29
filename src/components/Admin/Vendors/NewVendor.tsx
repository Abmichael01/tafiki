import { GlobalDialog } from "@/components/ui/CustomDialog";
import { DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useRef, useState } from "react";
// import { HiOutlineUserCircle } from "react-icons/hi2";
import { HiMiniBuildingStorefront } from "react-icons/hi2";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import imgIcon from "@/assets/svgs/img.svg"

// Zod schema for form validation
const vendorSchema = z.object({
  vendorName: z.string().min(2, "Vendor name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(7, "Phone is required"),
  image: z
    .any()
    .refine((file) => !file || file instanceof File, "Invalid file"),
});

type VendorFormValues = z.infer<typeof vendorSchema>;

// Form fields configuration
const formFields = [
  {
    id: "vendorName",
    label: "Vendor Name",
    type: "text",
    placeholder: "Enter Vendor's name",
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter Vendor's email",
  },
  {
    id: "phone",
    label: "Phone",
    type: "tel",
    placeholder: "Enter Vendor's phone",
  },
];

export default function NewVendor() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  // React Hook Form setup with zod
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    // reset,
    // watch,
  } = useForm<VendorFormValues>({
    resolver: zodResolver(vendorSchema),
    defaultValues: {
      vendorName: "",
      email: "",
      phone: "",
      image: undefined,
    },
  });

  // Watch image for preview
//   const image = watch("image");

  // Handle image upload and preview
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue("image", file, { shouldValidate: true });
      setImagePreview(URL.createObjectURL(file));
    }
  };

  // Handle form submit
  const onSubmit = (data: VendorFormValues) => {
    // Print debug info
    console.log("Submitting New Vendor:", data);
    // TODO: Add actual submit logic
    // Optionally reset form after submit
    // reset();
  };

  return (
    <GlobalDialog dialogName="new-vendor">
      <DialogContent className=" max-h-[80vh] overflow-y-auto fancy-scrollbar">
        <form
          className={cn(
            "w-full py-8 flex flex-col items-center gap-6 relative"
          )}
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Top Icon */}
          <div className="flex flex-col items-center gap-1 w-full">
            <span className="flex items-center justify-center p-[10px] rounded-full bg-[#15221B33]">
              <HiMiniBuildingStorefront className=" size-[21.3px] text-[#15221B]" />
            </span>
            <h2 className="text-[20px] font-bold text-[#15221B]">New Vendor</h2>
            <span className="text-[12px] font-medium -mt-2">
              Fill in Vendor's details
            </span>
          </div>

          {/* Form Fields */}
          <div className="w-full flex flex-col gap-5">
            {/* Vendor label */}
            <Label className="text-[15px] font-semibold text-[#15221B] mb-1">
              Vendor
            </Label>
            {/* Image upload */}
            <div className="flex flex-col items-center gap-2 mb-2">
              <div
                className="w-20 h-20 rounded-full bg-[#F3F4F6] flex items-center justify-center cursor-pointer relative"
                onClick={() => fileInputRef.current?.click()}
              >
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Vendor"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                ) : (
                  <img src={imgIcon} alt="img" className="size-[40px]" />
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </div>
              <button
                type="button"
                className="text-[13px] text-[#6B7280] bg-[#F3F4F6] px-6 py-2 h-fit rounded-full font-medium"
                onClick={() => fileInputRef.current?.click()}
              >
                Add Display image
              </button>
              {errors.image && (
                <span className="text-xs text-red-500">{errors.image.message as string}</span>
              )}
            </div>

            {/* Mapped Form Fields */}
            {formFields.map((field) => (
              <div key={field.id} className="flex flex-col gap-1">
                <Label htmlFor={field.id} className="text-[14px] font-medium text-[#6E6E6E]">
                  {field.label}
                </Label>
                <input
                  id={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  {...register(field.id as keyof VendorFormValues)}
                  className={cn(
                    "rounded-md px-[20px] py-[18px] text-[15px] bg-[#F9F9F9] focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-[#B6B6B6]",
                    errors[field.id as keyof VendorFormValues] && "border-red-500"
                  )}
                />
                {errors[field.id as keyof VendorFormValues] && (
                  <span className="text-xs text-red-500">
                    {errors[field.id as keyof VendorFormValues]?.message as string}
                  </span>
                )}
              </div>
            ))}

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-[#15221B] text-white px-4 py-2 rounded-md font-medium"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Creating..." : "Create Vendor"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </GlobalDialog>
  );
}