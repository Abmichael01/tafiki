import Logo from "@/components/Others/Logo";
import { Outlet } from "react-router-dom";
import pattern from "@/assets/images/patterns.webp"

export default function VendorLayout() {
  return (
    <div className="flex bg-white min-h-screen relative">
      <img src={pattern} alt="" className="size-[400px] rounded-full fixed top-[-200px] right-[-200px]" />
      <div className="flex justify-center items-center flex-1">
        <Logo className="w-[300px] h-auto" />
      </div>
      <div className="flex-1 flex justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
}