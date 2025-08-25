import { GlobalDialog } from "@/components/ui/CustomDialog";
import { DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useRef, useState, useEffect } from "react";
import { HiMiniBuildingStorefront } from "react-icons/hi2";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import imgIcon from "@/assets/svgs/img.svg";
import { Toast } from "../Toast";
import { toast } from "sonner";
import { useCloseDialog } from "@/hooks/closeDialog";
import { createVendor, updateVendor } from "@/api/adminEndpoints";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import errorMessage from "@/lib/errorMessage";
import { Vendor } from "@/types/admin";
import { API_BASE_URL } from "@/api/apiClient";
// import { useParams } from "react-router-dom";

// Zod schema for form validation
const vendorSchema = z.object({
  vendorName: z.string().min(2, "Vendor name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(7, "Phone is required"),
  store_name: z.string().min(2, "Store name is required"),
  store_email: z.string().email("Invalid store email address"),
  store_phone: z.string().min(7, "Store phone is required"),
  store_address: z.string().min(1, "Store address is required"),
  username: z.string().min(1, "Username is required"),
  password: z.string().optional(),
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
  {
    id: "store_name",
    label: "Store Name",
    type: "text",
    placeholder: "Enter store name",
  },
  {
    id: "store_email",
    label: "Store Email",
    type: "email",
    placeholder: "Enter store email",
  },
  {
    id: "store_phone",
    label: "Store Phone",
    type: "tel",
    placeholder: "Enter store phone",
  },
  {
    id: "store_address",
    label: "Store Address",
    type: "text",
    placeholder: "Enter store address",
  },
  {
    id: "username",
    label: "Username",
    type: "text",
    placeholder: "Enter Vendor's username",
  },
  {
    id: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter Vendor's password",
  },
];

// Add edit and data props
type NewVendorProps = {
  data?: Vendor; // for now, boolean, later will be object
};

export default function AddEditVendor({ data }: NewVendorProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  // const {id} = useParams()
  const id = data?.vendor_id

  // React Hook Form setup with zod
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
    // watch,
  } = useForm<VendorFormValues>({
    resolver: zodResolver(vendorSchema),
    defaultValues: {
      vendorName: data?.store_name || "",
      email: data?.store_email || "",
      phone: data?.store_phone || "",
      store_name: data?.store_name || "",
      store_email: data?.store_email || "",
      store_phone: data?.store_phone || "",
      store_address: data?.store_address || "",
      username: "",
      password: "",
      image: undefined,
    },
  });

  useEffect(() => {
    reset({
      vendorName: data?.store_name || "",
      email: data?.store_email || "",
      phone: data?.store_phone || "",
      store_name: data?.store_name || "",
      store_email: data?.store_email || "",
      store_phone: data?.store_phone || "",
      store_address: data?.store_address || "",
      username: "",
      password: "",
      image: undefined,
    });
  }, [data, reset]);

  const closeDialog = useCloseDialog("add-edit-vendor");
  const queryClient = useQueryClient()

  const { mutate, isPending } = useMutation({
    mutationFn: (data: FormData) => createVendor(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["vendors"] })
      toast.custom(() => (
        <Toast text="Vendor Added" icon={<HiMiniBuildingStorefront />} />
      ));
      closeDialog();

    },
    onError: (error: Error) => {
      console.log(error)
      toast.custom(() => (
        <Toast
          text={errorMessage(error)}
          decline
          icon={<HiMiniBuildingStorefront />}
        />
      ));
    },
  });

  const { mutate: update, isPending: isUpdating } = useMutation({
    mutationFn: (data: FormData) => updateVendor(data, id?.toString() as string),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["vendors"] })
      toast.custom(() => (
        <Toast text="Vendor Info Updated" icon={<HiMiniBuildingStorefront />} />
      ));
      closeDialog();
    },
    onError: (error: Error) => {
      toast.custom(() => (
        <Toast
          text={errorMessage(error)}
          decline
          icon={<HiMiniBuildingStorefront />}
        />
      ));
    },
  });

  // If editing and data is present, set up the preview (simulate for now)
  useEffect(() => {
    if (data) {
      // Simulate a vendor image for edit mode
      setImagePreview(API_BASE_URL + data?.profile_picture?.toString());
    }
  }, [data]);

  // Handle image upload and preview
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue("image", file, { shouldValidate: true });
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const toFormData = (values: VendorFormValues) => {
    console.log(values)
    const fd = new FormData();
    fd.append("vendorName", values.vendorName);
    fd.append("email", values.email);
    fd.append("phone", values.phone);
    fd.append("store_name", values.store_name);
    fd.append("store_email", values.store_email);
    fd.append("store_phone", values.store_phone);
    fd.append("store_address", values.store_address);
    fd.append("username", values.username);
    // Only append password if it exists and we're not editing
    if (values.password && !data) {
      fd.append("password", values.password);
    }
    if (values.image) fd.append("profile_picture", values.image);
    return fd;
  };
  // Handle form submit
  const onSubmit = async (formData: VendorFormValues) => {
    const dataLocal = toFormData(formData);
    const mutation = data ? update : mutate;
    mutation(dataLocal);
  };

  return (
    <GlobalDialog dialogName="add-edit-vendor">
      <DialogContent className="max-h-[80vh] overflow-y-auto fancy-scrollbar">
        <form
          className={cn(
            "w-full py-8 flex flex-col items-center gap-6 relative"
          )}
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Top Icon */}
          <div className="flex flex-col items-center gap-1 w-full">
            <span className="flex items-center justify-center p-[10px] rounded-full bg-[#15221B33]">
              <HiMiniBuildingStorefront className="size-[21.3px] text-[#15221B]" />
            </span>
            <h2 className="text-[20px] font-bold text-[#15221B]">
              {data ? "Edit Info" : "New Vendor"}
            </h2>
            <span className="text-[12px] font-medium -mt-2">
              {data
                ? "Make changes in Vendor's Info"
                : "Fill in Vendor's details"}
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
                {data ? "Change image" : "Add Display image"}
              </button>
              {errors.image && (
                <span className="text-xs text-red-500">
                  {errors.image.message as string}
                </span>
              )}
            </div>

            {/* Mapped Form Fields */}
            {formFields.map((field) => {
              // Hide password field when editing
              if (data && field.id === "password") {
                return null;
              }
              
              return (
                <div key={field.id} className="flex flex-col gap-1">
                  <Label
                    htmlFor={field.id}
                    className="text-[14px] font-medium text-[#6E6E6E]"
                  >
                    {field.label}
                  </Label>
                  <input
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    autoComplete="off"
                    {...register(field.id as keyof VendorFormValues)}
                    className={cn(
                      "rounded-md px-[20px] py-[18px] text-[15px] bg-[#F9F9F9] focus:outline-none placeholder:text-[#B6B6B6]",
                      errors[field.id as keyof VendorFormValues] &&
                        "border-red-500"
                    )}
                  />
                  {errors[field.id as keyof VendorFormValues] && (
                    <span className="text-xs text-red-500">
                      {
                        errors[field.id as keyof VendorFormValues]
                          ?.message as string
                      }
                    </span>
                  )}
                </div>
              );
            })}

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-[#15221B] text-white px-4 py-2 rounded-md font-medium"
              disabled={isPending||isUpdating}
            >
              {isPending||isUpdating
                ? data
                  ? "Saving..."
                  : "Creating..."
                : data
                ? "Save Changes"
                : "Create Vendor"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </GlobalDialog>
  );
}
