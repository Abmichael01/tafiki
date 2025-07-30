import { Link } from "react-router-dom";

// Data rewritten to match the image exactly
const users = [
  {
    id: 1,
    name: "Kapac Ventures",
    email: "kapacventures@email.com",
    avatar: "https://i.pravatar.cc/40?img=10",
    owner: "David Kapac",
    todaysRemittance: "£300",
    totalRemittance: "£12,300.96",
  },
  {
    id: 2,
    name: "JIK Foods",
    email: "jiwest@email.com",
    avatar: "https://i.pravatar.cc/40?img=11",
    owner: "Jake Tut",
    todaysRemittance: "£2,300.20",
    totalRemittance: "£15,500.53",
  },
  {
    id: 3,
    name: "Penn Stores",
    email: "johndoe@email.com",
    avatar: "https://i.pravatar.cc/40?img=12",
    owner: "Chris Penn",
    todaysRemittance: "£0.0",
    totalRemittance: "£12,300.43",
  },
  {
    id: 4,
    name: "Kapac Ventures",
    email: "kapacventures@email.com",
    avatar: "https://i.pravatar.cc/40?img=10",
    owner: "David Kapac",
    todaysRemittance: "£500.50",
    totalRemittance: "£15,500.09",
  },
  {
    id: 5,
    name: "JIK Foods",
    email: "jiwest@email.com",
    avatar: "https://i.pravatar.cc/40?img=11",
    owner: "Jake Tut",
    todaysRemittance: "£2,300.20",
    totalRemittance: "£15,500.53",
  },
  {
    id: 6,
    name: "Penn Stores",
    email: "johndoe@email.com",
    avatar: "https://i.pravatar.cc/40?img=12",
    owner: "Chris Penn",
    todaysRemittance: "£0.0",
    totalRemittance: "£12,300.43",
  },
];

export default function VendorsList() {
  return (
    <div className="bg-white text-sm overflow-hidden font-satoshi">
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto text-center border-collapse overflow-x-auto text-nowrap overflow-hidden">
          <thead>
            <tr className="text-[15px] text-[#6E6E6E] bg-[#F9F9F9] font-medium">
              <th className="px-4 py-2">Details</th>
              <th className="px-4 py-2">Owner</th>
              <th className="px-4 py-2">Today's Remittance</th>
              <th className="px-4 py-2">Total Remittance</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {users.map((user) => (
              <tr key={user.id}>
                {/* Details: Avatar, Name, Email */}
                <td className="px-4 py-3">
                  <Link to={`/admin/vendors/${user.id}`} className="flex items-center gap-3 max-[500px]:mr-10">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-[36px] h-[36px] rounded-full object-cover"
                    />
                    <div className="text-left">
                      <div className="font-semibold text-[15px]">{user.name}</div>
                      <div className="text-[14px] font-[500] text-[#929292]">{user.email}</div>
                    </div>
                  </Link>
                </td>
                {/* Owner */}
                <td className="px-4 py-3 font-semibold  text-[15px]">{user.owner}</td>
                {/* Today's Remittance */}
                <td className="px-4 py-3 font-semibold text-[15px]">{user.todaysRemittance}</td>
                {/* Total Remittance */}
                <td className="px-4 py-3 font-semibold text-[15px]">{user.totalRemittance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
