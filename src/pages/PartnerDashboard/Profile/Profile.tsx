import React from "react";
import Overview from "@/components/PartnerDashboard/Profile/Overview";
import Links from "@/components/PartnerDashboard/Profile/Links";
import useUserDetailsStore from "@/stores/userStore";
import { PenLine } from "lucide-react";
import { Link } from "react-router-dom";
import userPic from "@/assets/images/userPic.webp";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import useAuthStore from "@/stores/authStore";

const Profile: React.FC = () => {
  const { userDetails } = useUserDetailsStore();
  const { logout } = useAuthStore();

   const profileImageUrl = userDetails?.profile_picture 
    ? `${userDetails.profile_picture}`
    : userPic;
  return (
    <div className="space-y-10">
      <h1 className="text-[24px] font-[600]">Profile</h1>
      <div className="flex justify-between items-center w-full pb-4 border-b">
        <div className="flex gap-[12px] px-5 items-center">
          <img
            src={!userDetails?.profile_picture ? userPic : profileImageUrl}
            alt="Profile picture"
            className="size-[48px] rounded-full object-cover"
            loading="lazy"
          />
          <div className=" font-satoshi">
            <h1 className="font-[700] text-[20px] uppercase">
              {userDetails?.personal_details.username}
            </h1>
            <p className="text-[16px] font-500">
              {userDetails?.personal_details.email}
            </p>
          </div>
        </div>
        <Link to="?dialog=editProfile" className="w-fit">
          <PenLine className="size-[24px] text-[#494949]" />
        </Link>
      </div>
      <Overview />
      <Links />
      <Button
        onClick={() => {
          logout();
        }}
        className="flex justify-start items-center w-full  gap-[4px] text-[16px] py-[10px] bg-transparent hover:bg-red-100 rounded-md shadow-none text-red-600"
      >
        <LogOut />
        Logout
      </Button>
    </div>
  );
};

export default Profile;
