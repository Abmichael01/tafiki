import { BadgeCheck } from "lucide-react";
import { useEffect, useState } from "react";

export default function Success() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const titleParam = urlParams.get("title") || "Product Restocked";
    const descriptionParam =
      urlParams.get("description") || "";

    setTitle(titleParam);
    setDescription(descriptionParam);
  }, []);

  return (
    <div className="w-full text-center flex flex-col items-center">
      {/* Success Icon */}

      <BadgeCheck className="size-[150.45px] border-[#16A34A]  text-white fill-[#16A34A]" />
      {/* Title */}
      <h1 className="text-xl font-semibold text-gray-900 mb-3">{title}</h1>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed">
        <span className="font-medium"></span> {description}
      </p>
    </div>
  );
}
