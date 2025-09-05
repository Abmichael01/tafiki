import { cn } from '@/lib/utils';

interface Props {
    className: string;
    img: string;
}

export default function GalleryPhoto({ className, img } : Props) {
  return (
    <div className={cn(className)}>
        <img src={"/gallery"+img} alt="" className='drop-shadow-2xl w-full shrink-0' />
    </div>
  )
}
