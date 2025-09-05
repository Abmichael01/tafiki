import GalleryPhoto from "./GalleryPhoto";

export default function Gallery() {
  return (
    <div className="section-padding section-spacing space-y-20">
      <h1 className="section-title">Gallery</h1>
      <div className="grid grid-cols-4 gap-4 max-w-[80%] mx-auto ">
        <GalleryPhoto className="translate-y-20" img="/img1.png" />
        <GalleryPhoto className="-translate-y-10" img="/img2.png" />
        <GalleryPhoto className="-translate-y-10" img="/img3.png" />
        <GalleryPhoto className="translate-y-3 -translate-x-16" img="/img4.png" />

        <GalleryPhoto className="-translate-y-6" img="/img5.png" />
        <GalleryPhoto className="w-[336.6px] -translate-y-30 -translate-x-15" img="/img6.png" />
        <GalleryPhoto className="-translate-y-40" img="/img7.png" />
        <GalleryPhoto className="-translate-y-35 -translate-x-16" img="/img8.png" />

        <GalleryPhoto className="-translate-y-30" img="/img9.png" />
        <GalleryPhoto className="-translate-y-60 w-[300px] -translate-x-14" img="/img10.png" />
        <GalleryPhoto className="-translate-y-50" img="/img11.png" />
        <GalleryPhoto className="-translate-y-50 -translate-x-16" img="/img12.png" />

        <GalleryPhoto className="-translate-y-90 translate-x-50" img="/img13.png" />
        <GalleryPhoto className="-translate-y-80 translate-x-40" img="/img14.png" />
        <GalleryPhoto className="-translate-y-80 translate-x-40" img="/img15.png" />
      </div>
    </div>
  );
}
