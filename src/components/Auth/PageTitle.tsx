import React from "react";
import { ArrowLeft } from "lucide-react"; // Example: Importing from react-icons
import { Link } from "react-router-dom";

interface PageTitleProps {
  title: string;
  subtitle?: string;
  backLink?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, subtitle, backLink }) => {
  return (
    <div className="w-full flex flex-col gap-[2px] items-center justify-center relative font-satoshi">
      {backLink && (
        <Link autoFocus={false} to={backLink as string} className="absolute py-2 left-0 px-4">
            <ArrowLeft />
        </Link>
      )}
      <h1 className="text-[20px] sm:text-[30px] md:text-[40px] font-bold text-[#636C67] text-center">{title}</h1>
      <p className="text-[#494949] text-[14px] sm:text-[18px] text-center">{subtitle}</p>
    </div>
  );
};

export default PageTitle;
