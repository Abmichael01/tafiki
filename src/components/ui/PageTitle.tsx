import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";

interface PageTitleProps {
  title?: string;
  subtitle?: string;
  showBack?: boolean;
  backLink?: string;
  className?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ 
  title, 
  subtitle, 
  showBack = false, 
  backLink = "", 
  className = "" 
}) => {
  const navigate = useNavigate();

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    if (backLink) {
      navigate(backLink);
    } else {
      navigate(-1);
    }
  };

  return (
    <div className={`flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 ${className}`}>
      <div className="flex items-center gap-[8px]">
        {showBack && (
          <button
            type="button"
            onClick={handleBack}
            className="p-0 m-0 bg-transparent border-none outline-none cursor-pointer"
            aria-label="Go back"
          >
            <GoArrowLeft className="size-[24px]" />
          </button>
        )}
        <h1 className="text-[20px] sm:text-[24px]">
          {title && title}
          {subtitle && (
            <span className="font-[500] text-[14px] sm:text-[16px] text-[#929292]">
              /{subtitle}
            </span>
          )}
        </h1>
      </div>
    </div>
  );
};

export default PageTitle; 