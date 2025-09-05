
export default function FoodSafety() {
  return (
    <div className="section-padding section-spacing">
        <h1 className="section-title"> Food Safety & Global Standards</h1>
      <div className="flex flex-col lg:flex-row mt-13">
        <img src="/foodsafety.png" alt="" className="rounded-t-xl lg:rounded-l-xl lg:rounded-t-none w-full lg:w-1/2" />
        <div className="flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 rounded-b-xl lg:rounded-r-xl lg:rounded-b-none font-satoshi text-[20px] sm:text-[24px] lg:text-[28px] w-full lg:w-1/2 bg-primary text-white">
          <p>
            At <span className="font-bold text-[#86BF4C]">Tafiki</span>, we are
            unwavering in our commitment to the highest standards of food
            safety, hygiene, and global best practices. Every stage of our
            logistics and food processing system is built to exceed
            international benchmarks, ensuring every product delivered is not
            just fresh but safe, clean, and trustworthy.
          </p>
        </div>
      </div>
    </div>
  );
}
