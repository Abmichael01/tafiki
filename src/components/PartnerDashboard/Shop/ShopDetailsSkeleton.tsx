import { Skeleton } from "@/components/ui/skeleton";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";

const ShopDetailsSkeleton = () => {
  return (
    <div className="space-y-8">
      <div>
        <Link to="/partner/shop">
          <GoArrowLeft className="size-[20px]" />
        </Link>
      </div>
      
      <div className="space-y-[60px]">
        <div className="space-y-[40px]">
          {/* Product Image and Details Section */}
          <div className="flex flex-col md:flex-row gap-[40px]">
            {/* Product Image Skeleton */}
            <Skeleton className="w-[240px] h-[240px]" />

            {/* Product Details Section */}
            <div className="space-y-[20px] text-start flex-1">
              <div className="space-y-[2px]">
                <Skeleton className="h-8 w-[200px]" /> {/* Product Name */}
              </div>

              <div className="space-y-[4px]">
                <Skeleton className="h-5 w-[150px]" /> {/* Unit Info */}
                
                {/* Price Calculator Section */}
                <div className="space-y-2">
                  <Skeleton className="h-6 w-[100px]" /> {/* Price */}
                  <div className="flex items-center gap-4">
                    <Skeleton className="h-10 w-[120px]" /> {/* Unit Input */}
                    <Skeleton className="h-10 w-[120px]" /> {/* Total Price */}
                  </div>
                </div>
              </div>

              {/* Add to Cart Button */}
              <Skeleton className="h-10 w-full" />
            </div>
          </div>

          {/* Description Section */}
          <div className="space-y-[12px]">
            <Skeleton className="h-6 w-[200px]" /> {/* ROI Text */}
            <Skeleton className="h-24 w-full lg:w-[770px]" /> {/* Description */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDetailsSkeleton;