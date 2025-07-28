import { Link } from "react-router-dom";

const users = new Array(4).fill([
  {
    name: "John Doe",
    username: "John_doe",
    email: "john@example.com",
    avatar: "https://i.pravatar.cc/40?img=1",
    totalPurchase: "£25,600",
    totalOrders: 45,
    totalBalance: "£7,000",
  },
  {
    name: "Maria West",
    username: "maria_w",
    email: "maria@example.com",
    avatar: "https://i.pravatar.cc/40?img=2",
    totalPurchase: "£18,200",
    totalOrders: 38,
    totalBalance: "£5,300",
  },
]).flat();

export default function PartnerList() {
  return (
    <div className="bg-white text-sm overflow-hidden font-satoshi">
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto text-center border-collapse overflow-x-auto text-nowrap overflow-hidden">
          <thead>
            <tr className="text-[15px] text-[#6E6E6E] bg-[#F9F9F9] font-medium">
              <th className="px-4 py-2">Details</th>
              <th className="px-4 py-2">Username</th>
              <th className="px-4 py-2">Total purchase</th>
              <th className="px-4 py-2">Total orders</th>
              <th className="px-4 py-2">Total balance</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {users.map((user, idx) => (
              <tr
                key={idx}
              >
                {/* Details: Avatar, Name, Email */}
                <td className="px-4 py-3 text-left">
                  <Link to={`/admin/partners/${user.id}`} className="flex items-center gap-3 mr-10">
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

                {/* Username */}
                <td className="px-4 py-3 text-[15px]">{user.username}</td>

                {/* Total Purchase */}
                <td className="px-4 py-3 font-semibold text-[15px]">
                  {user.totalPurchase}
                </td>

                {/* Total Orders */}
                <td className="px-4 py-3 font-semibold text-[15px]">{user.totalOrders}</td>

                {/* Total Balance */}
                <td className="px-4 py-3 font-semibold text-[15px]">
                  {user.totalBalance}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

