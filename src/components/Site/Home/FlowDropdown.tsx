import { cn } from "@/lib/utils"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FlowDropdown() {
    const [show, setShow] = useState(false)
    
    return (
        <div className="w-full max-w-4xl mx-auto flex justify-center items-center flex-col gap-4">
            <button 
                className={cn(
                    "flex items-center justify-between w-fit px-4 py-3",
                    "bg-white border border-gray-300 rounded-lg shadow-sm",
                    "text-gray-700 font-medium",
                    "transition-all duration-200 ease-in-out",
                    "hover:shadow-md hover:border-gray-400",
                    "active:scale-[0.99]",
                )}
                onClick={() => setShow(!show)}
                aria-expanded={show}
                aria-controls="flow-content"
                type="button"
            >
                <span className="text-base">See Fulfillment Flow</span>
                <div className={cn(
                    "ml-3 transition-transform duration-200 ease-in-out",
                    show ? "rotate-180" : "rotate-0"
                )}>
                    <ChevronDown size={20} />
                </div>
            </button>
            
            <div 
                id="flow-content"
                className={cn(
                    "overflow-hidden transition-all duration-500 ease-in-out",
                    show ? "max-h-[2000px] opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
                )}
                aria-hidden={!show}
            >
                <div className={cn(
                    "bg-white rounded-lg shadow-lg border border-gray-200 p-4",
                    "transform transition-all duration-500 ease-in-out",
                    show ? "translate-y-0 scale-100" : "-translate-y-4 scale-95"
                )}>
                    <div className="relative">
                        <img 
                            src="/flow.jpg" 
                            alt="Fulfillment process flow diagram showing the complete order processing workflow" 
                            className={cn(
                                "w-full h-auto rounded border border-gray-200",
                                "transition-all duration-700 ease-in-out",
                                show ? "opacity-100 scale-100" : "opacity-0 scale-95"
                            )}
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}