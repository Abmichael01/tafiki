import { cn } from "@/lib/utils";

export default function Mission({ about = false }: { about?: boolean }) {
  return (
    <div
      className={cn(
        "section-padding bg-primary w-full lg:h-[600px] gap-10 flex flex-col lg:flex-row items-center justify-between py-16 px-4 ",
        !about && "section-spacing"
      )}
    >
      <img
        src="/landingMan.png"
        alt="tafiki delivery man"
        className="object-contain h-full rounded-xl shrink-0"
        loading="lazy"
      />
      {/* Right: Mission Text */}
      <div className="flex-1 w-full h-full bg-[#193607] rounded-lg p-10 flex items-center justify-center">
        <p className="text-[18px] lg:text-[22px] leading-relaxed text-white font-[400]">
          <span className="text-[#B6E388] font-[600]">Our mission</span>
          <span> is to make African food products </span>
          <span className=" mt-2">
            <span className="font-[600]">Accessible, Trusted, and Loved</span>{" "}
            worldwide, while
          </span>
          <span className=" mt-2">
            Empowering a new class of{" "}
            <span className="font-[600]">Digital distributors</span> and
          </span>
          <span className="">
            <span className="font-[600]">Logistics entrepreneurs</span>.
          </span>
        </p>
      </div>
    </div>
  );
}
