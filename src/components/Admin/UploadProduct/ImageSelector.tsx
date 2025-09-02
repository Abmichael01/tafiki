import clsx from "clsx";
import useProductStore from "@/stores/productStore";
import { X, Plus } from "lucide-react";
import { useMemo, useEffect, useRef, useState } from "react";

export default function ImageSelector() {
  const { productData, addImage, removeImage } = useProductStore();
  const { images } = productData;
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragOver, setIsDragOver] = useState(false);

  // Memoize URLs to avoid unnecessary object URL creation
  const imageUrls = useMemo(() => {
    if (!images || images.length === 0) return [];
    
    return images.map((img) => {
      // If it's a File (from upload), create an object URL
      if (img instanceof File) {
        return URL.createObjectURL(img);
      }
      // If it's a string (URL from backend), use as is
      if (typeof img === "string") {
        return img;
      }
      // Fallback (should not happen)
      return "";
    });
  }, [images]);

  // Clean up object URLs when component unmounts or images change
  useEffect(() => {
    return () => {
      // Clean up any object URLs we created
      imageUrls.forEach((url) => {
        if (url.startsWith('blob:')) {
          URL.revokeObjectURL(url);
        }
      });
    };
  }, [imageUrls]);

  const handleFileSelect = (files: FileList | null) => {
    if (!files) return;
    
    Array.from(files).forEach((file) => {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please select only image files');
        return;
      }
      
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        return;
      }
      
      addImage(file);
    });
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    handleFileSelect(e.dataTransfer.files);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  const handleRemoveImage = (index: number) => {
    removeImage(index);
  };

  return (
    <div 
      className="grid grid-cols-4 justify-center gap-[12px]"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      {/* Display existing images */}
      {imageUrls.map((url, index) => (
        <div
          key={index}
          className={clsx(
            "p-[8px] w-fit border rounded-[8px] flex items-center justify-center cursor-pointer relative",
            "border-primary border-2"
          )}
        >
          <img
            src={url}
            className="size-[76.5px] object-cover rounded-[6px]"
            alt={`product-img-${index}`}
            onError={(e) => {
              console.error('Failed to load image:', url);
              e.currentTarget.style.display = 'none';
            }}
          />
          <button
            title="Remove image"
            onClick={(e) => {
              e.stopPropagation();
              handleRemoveImage(index);
            }}
            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
          >
            <X className="h-3 w-3" />
          </button>
        </div>
      ))}

      {/* Add image button */}
      <div 
        className={clsx(
          "h-[100px] bg-[#F9F9F9] rounded-[8px] flex items-center justify-center cursor-pointer transition-colors",
          isDragOver && "bg-primary/10 border-2 border-primary"
        )}
        onClick={openFileDialog}
      >
        <input
          title="Attach image"
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*"
          className="hidden"
          onChange={(e) => handleFileSelect(e.target.files)}
        />
        <div className="p-[2px] bg-[#F0F0F0] rounded-full">
          <Plus className="font-[600] size-[20px]" />
        </div>
      </div>
    </div>
  );
}
