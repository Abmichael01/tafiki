import { GlobalDialog } from "@/components/ui/CustomDialog";
import { DialogContent } from "@/components/ui/dialog";
import React from "react";
import { BsClockFill } from "react-icons/bs";
import { Link } from "react-router-dom";

interface Partner {
  id: string;
  name: string;
  email: string;
  avatar: string;
  amountDue: string;
}

const partners: Partner[] = [
  {
    id: "1",
    name: "John Doe",
    email: "johndoe@email.com",
    avatar: "https://i.pravatar.cc/40?img=1",
    amountDue: "$12,300",
  },
  {
    id: "2",
    name: "John Doe",
    email: "johndoe@email.com",
    avatar: "https://i.pravatar.cc/40?img=1",
    amountDue: "$12,300",
  },
  {
    id: "3",
    name: "John Doe",
    email: "johndoe@email.com",
    avatar: "https://i.pravatar.cc/40?img=1",
    amountDue: "$12,300",
  },
];

const DueForRemittance: React.FC = () => {

  return (
    <GlobalDialog dialogName="due-for-remittance">
      <DialogContent className="flex flex-col justify-center items-center text-center">
        {/* Header */}
        <div className="flex justify-between items-center mb-4 w-full">
          <div className="flex flex-col gap-[5px] items-center flex-1">
            <div className="p-4 shrink-0 bg-[#15221B33] rounded-full w-fit">
              <BsClockFill className="size-[36px]  " />
            </div>
            <div className="">
              <h2 className="font-[700] text-[20px] text-[#252525]">
                Due for Remittance
              </h2>
              <p className="text-[16px] text-[#252525]/70">
                Partners due for Remittance
              </p>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="w-full overflow-hidden rounded-lg">
          {/* Table Header */}
          <div className="bg-gray-50 px-[8px] py-[8px] ">
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold ">Partner</span>
              <span className="text-sm font-semibold">Amount Due</span>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y font-satoshi">
            {partners.map((partner) => (
              <div key={partner.id} className="py-3">
                <div className="flex justify-between items-center">
                  {/* Partner Info */}
                  <Link to={`/admin/partners/${partner.id}`} className="flex items-center gap-3">
                    <img
                      src={partner.avatar}
                      alt={partner.name}
                      className="size-[48px] rounded-full object-cover"
                    />
                    <div className="space-y-[4px] text-left">
                      <p className="text-[18px] font-bold ">{partner.name}</p>
                      <p className="text-[16px] font-medium text-[#929292]">
                        {partner.email}
                      </p>
                    </div>
                  </Link>

                  {/* Amount Due */}
                  <div className="text-[18px] font-bold">
                    {partner.amountDue}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </GlobalDialog>
  );
};

export default DueForRemittance;
