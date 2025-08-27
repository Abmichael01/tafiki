import { Plus } from "lucide-react";
import Header from "./Header";
import ProductImages from "./ImageSelector";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import useProductStore from "@/stores/productStore";
import { useRef, useState } from "react";
import clsx from "clsx";

export default function AttachImage() {
  const { productData, addImage } = useProductStore();
  const { images } = productData;
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragOver, setIsDragOver] = useState(false);

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

  const canProceed = images.length > 0;

  return (
    <div className="space-y-[24px]">
      <Header title="New Product" />
      <h2 className="text-[12px] text-center font-[500]">
        Attach Product Images
      </h2>

      <div 
        className="grid grid-cols-4 justify-center gap-[12px]"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <ProductImages />

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
      <Link 
        to={canProceed ? "?dialog=upload-product&current=product-details" : "#"} 
        className="w-full"
      >
        <Button 
          className="w-full" 
          disabled={!canProceed}
        >
          Next
        </Button>
      </Link>
    </div>
  );
}
