
export default function Info() {
    return (
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <div className="flex items-center gap-[12px]">
                <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt=""
                    className="size-[64px] sm:size-[72px] rounded-full object-cover"
                />
                <div className="space-y-[2px] sm:space-y-[4px] font-satoshi">
                    <h2 className="text-[20px] sm:text-[24px] font-[900]">John Doe</h2>
                    <p className="text-[14px] sm:text-[16px] font-[500] text-[#929292]">john123 | johndoe@gmail.com</p>
                </div>
            </div>
        </div>
    );
}