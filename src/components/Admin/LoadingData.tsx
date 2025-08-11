import { Loader2 } from "lucide-react";


export default function LoadingData() {
  return (
    <div className="h-full flex justify-center items-center">
        <Loader2 className="text-primary animate-spin" />
    </div>
  )
}
