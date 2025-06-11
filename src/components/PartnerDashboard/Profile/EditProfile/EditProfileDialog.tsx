import { GlobalDialog } from "@/components/ui/CustomDialog";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Camera } from "lucide-react";
import { cn } from "@/lib/utils";
import useUserDetailsStore from "@/stores/userStore";
import { updateProfile } from "@/api/apiEndpoints";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useNavigate, useSearchParams } from "react-router-dom";
import userPic from "@/assets/images/userPic.webp";
import ConfirmOtp from "./ConfirmOtp";

const formSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  first_name: z.string().min(2, "First name is required"),
  last_name: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
});

const EditProfileDialog: React.FC = () => {
  const { userDetails } = useUserDetailsStore();
  const img = userDetails?.profile_picture as string;
  const [hasPic, setHasPic] = useState<boolean>(
    userDetails?.profile_picture !== null
  );
  const [profileImage, setProfileImage] = useState<string>(img);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  //   const [isEmailChanged, setIsEmailChanged] = useState(false);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [params] = useSearchParams();
  const current = params.get("current");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    setProfileImage(img);
    form.reset({
      username: userDetails?.personal_details.username || "",
      first_name: userDetails?.personal_details.first_name || "",
      last_name: userDetails?.personal_details.last_name || "",
      email: userDetails?.personal_details.email || "",
    });
  }, [form, userDetails, setProfileImage, img]);

  const { mutate, isPending } = useMutation({
    mutationFn: async (values: z.infer<typeof formSchema>) => {
      const formData = new FormData();

      // Append text fields
      formData.append("username", values.username);
      formData.append("first_name", values.first_name);
      formData.append("last_name", values.last_name);
      formData.append("email", values.email);

      // Append image if selected
      if (selectedFile) {
        formData.append("profile_picture", selectedFile);
      }

      return updateProfile(formData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userDetails"] });
      toast.success("Profile updated successfully");
      // navigate("/partner/profile?dialog=editProfile&current=confirm-otp")
      // Check if email was changed
      // if (variables.email !== userDetails?.personal_details.email) {
      //   toast.info("Please verify your new email address");
      //   navigate("?dialog=editProfile&current=confirm-otp")
      // }

      navigate(-1); // Close dialog
    },
    onError: (error: Error) => {
      toast.error(error.message || "Failed to update profile");
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file); // Store the file for form submission

      // Preview the image
      const reader = new FileReader();
      reader.onloadend = () => {
        setHasPic(true);
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    mutate(values);
  };

  const inputClassname = cn(
    "rounded-[4px] px-[16px] py-[10px] bg-[#F0F0F0] font-satoshi text-[16px] w-full"
  );

  if (current === "confirm-otp") {
    return <ConfirmOtp />;
  }

  return (
    <GlobalDialog dialogName="editProfile">
      <DialogContent
        className="sm:max-w-[425px]"
        aria-description="edit-profile"
      >
        <DialogHeader>
          <DialogTitle className="text-[#252525] font-[600] text-[16px]">
            Edit Personal Info
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Profile Picture */}
            <div className="flex justify-center">
              <div className="relative">
                <img src={hasPic ? profileImage : userPic} alt="user pic" className="size-[120px] rounded-full object-cover" />
                <label
                  htmlFor="profile-image"
                  className="absolute inset-0 opacity-[0] hover:bg-black/40 hover:opacity-[1] rounded-full shadow-md flex cursor-pointer items-center justify-center transition duration-300"
                >
                  <Camera className="size-[36px] text-white" />
                  <input
                    type="file"
                    id="profile-image"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </label>
              </div>
            </div>
            <p className="text-center text-sm text-gray-500">
              Change Profile picture
            </p>

            {/* Form Fields */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#6E6E6E] text-[14px]">
                    Username
                  </FormLabel>
                  <input {...field} className={inputClassname} />
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-2">
              <label htmlFor="" className="text-[#6E6E6E] text-[14px]">
                Name
              </label>
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="first_name"
                  render={({ field }) => (
                    <FormItem>
                      <input
                        onClick={() => {
                          toast.info("Name cannot be changed");
                        }}
                        {...field}
                        readOnly
                        className={inputClassname}
                        placeholder="First"
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="last_name"
                  render={({ field }) => (
                    <FormItem>
                      <input
                        onClick={() => {
                          toast.info("Name cannot be changed");
                        }}
                        {...field}
                        readOnly
                        className={inputClassname}
                        placeholder="Last"
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#6E6E6E] text-[14px]">
                    Email address
                  </FormLabel>
                  <input
                    onClick={() => {
                      toast.info("Email cannot be changed");
                    }}
                    {...field}
                    readOnly
                    type="email"
                    className={inputClassname}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              disabled={isPending}
              type="submit"
              className="w-full rounded-[4px]"
            >
              {isPending ? "Saving..." : "Save changes"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </GlobalDialog>
  );
};

export default EditProfileDialog;
