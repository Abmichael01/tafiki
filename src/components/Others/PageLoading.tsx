import Logo from "./Logo";

export default function PageLoading() {
  return (
    <div className="h-screen flex flex-col gap-5 items-center justify-center">
      <div className="relative flex flex-col items-center justify-center  size-[200px]">
        <Logo />
        <div className="border border-r-0 border-b-0 border-l-0 rounded-full size-[200px] border-primary absolute top-0 left-0 animate-spin"></div>
      </div>
    </div>
  );
}
