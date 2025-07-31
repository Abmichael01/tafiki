import { Outlet } from "react-router-dom";

export default function DeliveryLayout() {
  return (
    <div className="flex justify-center items-center min-h-screen h-full bg-primary/5">
      <div className="max-w-[500px] w-full bg-white h-full border p-5 py-7">
        <Outlet />
      </div>
    </div>
  );
}
