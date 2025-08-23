import Logo from "@/components/Others/Logo";
import { Outlet } from "react-router-dom";
import pattern from "@/assets/images/patterns.webp";

export default function ShopLayout() {
  return (
    <div className="flex bg-white min-h-screen relative">
      <img
        src={pattern}
        alt=""
        className="  shrink-0 size-[400px] rounded-full fixed top-[-245px] right-[-245px]"
      />
      <div className="hidden lg:flex fixed top-0 left-0 w-1/2 h-screen justify-center items-center pt-12 z-10 bg-white">
        <Logo className="w-[300px] h-auto" />
      </div>
      <div className="flex-1 flex justify-center items-center py-20 ml-0 lg:ml-[50%] px-5">
        <div className="max-w-[400px] w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
