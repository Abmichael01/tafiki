import React from "react";
import { IoSearch } from "react-icons/io5";
// import { useSidebarStore } from "@/stores/sidebarStore";
import useCartStore from "@/stores/cartStore";
import { useQuery } from "@tanstack/react-query";
import { CartItem } from "@/types";
import { viewCart } from "@/api/apiEndpoints";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
// import useUserDetailsStore from "@/stores/userStore";
// import useAuthStore from "@/stores/authStore";

const Navbar: React.FC = () => {
  // const { toggle } = useSidebarStore();
  // const { userDetails } = useUserDetailsStore()
  const { updateCart } = useCartStore();
  // const { logout } = useAuthStore()
  const { data } = useQuery({
    queryKey: ["cartItems"],
    queryFn: viewCart,
  });
  // const navigate = useNavigate()

  React.useEffect(() => {
    if (data) {
      updateCart(data.items as CartItem[]);
    }
  }, [updateCart, data]);

  return (
    <div className="flex justify-between md:px-14 sm:px-10 px-2 lg:px-10 items-center gap-[10px] sm:gap-[24px] h-fit sticky top-0 py-5 bg-[#F9F9F9]/80 backdrop-blur-xl z-[9]">
      {/* <div
        onClick={toggle}
        className="px-[12px] lg:hidden shrink-0 py-[12px] text-[14px] bg-white rounded-[8px] h-full border flex items-center gap-[4px] border-[#F0F0F0]"
      >
        <FiMenu className="w-[20.5px] h-[18.7px]" />
      </div> */}
      <div className="bg-white text-[#6E6E6E] max-w-[500px] w-full rounded-[8px] flex gap-2 items-center px-[12px] border border-[#F0F0F0]">
        <IoSearch className="size-[15px]" />
        <input
          type="text"
          className=" border-0 h-full py-[12px] w-full outline-none"
          placeholder="Search"
        />
      </div>

      <Link to="?dialog=upload-product">
        <Button className="h-fit py-[16px] rounded-[12px]">
          <Plus />
          Upload Product
        </Button>
      </Link>
    </div>
  );
};

export default Navbar;
