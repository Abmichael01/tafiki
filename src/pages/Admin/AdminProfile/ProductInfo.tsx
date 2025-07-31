import { FiTrash2, FiRotateCw } from "react-icons/fi";
import riceImage from "@/assets/images/rice.webp";
import beansImage from "@/assets/images/beans.webp";
import plantainFlourImage from "@/assets/images/plantainFlour.webp";
import { Link } from "react-router-dom";
import { useState } from "react";
import PageTitle from "@/components/ui/PageTitle";
import { ChevronLeft, ChevronRight, Edit3 } from "lucide-react";
import DeleteProduct from "@/components/Admin/AdminProfile/DeleteProduct";

const quantityStatusStyles: Record<
    string,
    { bg: string; text: string }
> = {
    Good: {
        bg: "bg-green-100",
        text: "text-green-600",
    },
    Average: {
        bg: "bg-yellow-100",
        text: "text-yellow-600",
    },
    Low: {
        bg: "bg-red-100",
        text: "text-red-600",
    },
};

export default function ProductInfo() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Mock product data with multiple images
    const product = {
        name: "Food Hybrid Rice",
        images: [riceImage, beansImage, plantainFlourImage],
        pricePerUnit: "£50",
        bagsPerUnit: "5 Bags",
        unitsAvailable: 15,
        totalBags: 75,
        quantityStatus: "Good",
        about: `Simplify your kitchen prep with our Peeled Beans, a convenient and time-saving solution for your favorite bean dishes. Carefully hand-peeled and processed, our beans maintain their natural flavor and texture, perfect for moin-moin, akara, or any traditional bean recipe, all without the hassle of peeling.`,
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
    };

    return (
        <div className="space-y-5">
            {/* Header */}
            <PageTitle title="Product Info" showBack={true} backLink="/admin/profile/manage-products" />

            {/* Main Content */}
            <div className="grid grid-cols-3 gap-[30px]">
                {/* Product Images Section */}
                <div className="">
                    {/* Main Image with Navigation */}
                    <div className="relative mb-4 flex items-center gap-2 p-2">
                        <button
                            onClick={prevImage}
                            className=" bg-white p-2 rounded-full hover:shadow-md cursor-pointer"
                        >
                            <ChevronLeft className="size-5 text-gray-700" />
                        </button>
                        <img
                            src={product.images[currentImageIndex]}
                            alt={product.name}
                            className="size-[173px] object-contain rounded-lg"
                        />
                        <button
                            onClick={nextImage}
                            className=" bg-white p-2 rounded-full hover:shadow-md cursor-pointer"
                        >
                            <ChevronRight className="size-5 text-gray-700" />
                        </button>
                    </div>

                    {/* Thumbnail Gallery */}
                    <div className="flex gap-3 justify-center">
                        {product.images.map((image, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`w-14 h-14 p-2 rounded-[5px] overflow-hidden border ${index === currentImageIndex ? "border-primary" : "border-gray-200"
                                    }`}
                            >
                                <img
                                    src={image}
                                    alt={`${product.name} ${index + 1}`}
                                    className="w-full h-full object-contain"
                                />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Details Section */}
                <div className=" flex flex-col justify-start">
                    <h2 className="text-[24px] font-semibold mb-4">{product.name}</h2>

                    <div className="space-y-3 text-[15px] mb-6">
                        <div>
                            <span className="text-gray-500">Price:</span>{" "}
                            <span className="font-medium">{product.pricePerUnit}</span>
                        </div>
                        <div>
                            <span className="text-gray-500">Bags per unit:</span>{" "}
                            <span className="font-medium">{product.bagsPerUnit}</span>
                        </div>
                        <div>
                            <span className="text-gray-500">Units available:</span>{" "}
                            <span className="font-medium">
                                {product.unitsAvailable} units ({product.totalBags} Bags)
                            </span>
                        </div>
                        <div>
                            <span className="text-gray-500">Quantity status:</span>{" "}
                            <span
                                className={`inline-block px-4 py-1 rounded text-[14px] font-medium ${quantityStatusStyles[product.quantityStatus]?.bg || "bg-gray-100"
                                    } ${quantityStatusStyles[product.quantityStatus]?.text || "text-gray-500"
                                    }`}
                            >
                                {product.quantityStatus}
                            </span>
                        </div>
                    </div>

                    <Link to="?dialog=upload-product&current=restock-product" className="flex items-center justify-center gap-2 bg-[#15221B] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#15221B]/90 transition-colors mb-8">
                        <FiRotateCw className="size-5" />
                        Restock
                    </Link>
                </div>
                <div className="flex justify-end items-start">
                    <div className="flex items-center gap-3">
                        <Link to="?dialog=upload-product&current=product-details" className="flex items-center gap-1 text-primary rounded-full hover:text-primary text-[15px] px-3 py-2 hover:bg-primary/5 transition-all duration-300 cursor-pointer">
                            <Edit3 className="size-4" />
                            <span className="hidden sm:inline">Edit product info</span>
                        </Link>
                        <Link to="?dialog=delete-product" className="px-3 py-2 rounded bg-red-50 text-red-600 hover:bg-red-100 transition-all duration-300 cursor-pointer">
                            <FiTrash2 className="size-4" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* About Product Section */}
            <div className="mt-8 grid grid-cols-3">
                <div className="col-span-2 space-y-[8px]">
                    <h3 className="text-[14px] text-[#929292] font-semibold">About Product</h3>
                    <p className="text-[18px] text-gray-600 leading-relaxed font-satoshi ">
                        {product.about}
                    </p>
                </div>
            </div>
            <DeleteProduct />
        </div>
    );
}

