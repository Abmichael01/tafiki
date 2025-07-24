import orderIcon from "@/assets/svgs/orderBox.svg"

const orders = new Array(4).fill({
  id: '#5210',
  time: '17:56',
  date: '21st Jan, 2025',
  partnerName: 'John Doe',
  vendorName: 'Kapac Ventures',
  amount: '£12,300',
  details: '5 units of Rice, 2 units of...',
  partnerAvatar: 'https://i.pravatar.cc/40?img=1',
  vendorAvatar: 'https://i.pravatar.cc/40?img=2',
});

const RecentOrders = () => {
  return (
    <div className="bg-white text-sm overflow-hidden font-satoshi">
      {/* Header */}
      <div className="flex items-center justify-between py-2">
        <h2 className="font-semibold text-[20px]">Recent Orders</h2>
        <a href="#" className="text-[14px] text-gray-500 hover:underline">
          View all &gt;
        </a>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border-none">
        <table className="min-w-full table-auto border-none text-center text-nowrap">
          <thead>
            <tr className="text-[16px] text-[#6E6E6E] bg-[#F9F9F9] font-medium">
              <th className="px-4 py-2">Order ID and Date</th>
              <th className="px-4 py-2">By: Partner</th>
              <th className="px-4 py-2">To: Vendor</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Order details</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, idx) => (
              <tr key={idx} className="border-b border-[#F0F0F0]">
                {/* Order ID and Date */}
                <td className="px-4 py-3">
                  <div className="flex items-start gap-2">
                    <img src={orderIcon} className="size-[33.3px] text-gray-500 mt-1" />
                    <div>
                      <div className="font-bold text-[18px]">Order {order.id}</div>
                      <div className="text-[14px] text-gray-500">
                        {order.time}, {order.date}
                      </div>
                    </div>
                  </div>
                </td>

                {/* Partner */}
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <img
                      src={order.partnerAvatar}
                      alt="Partner"
                      className="size-[24px] rounded-full object-cover"
                    />
                    <span className="text-[16px]">{order.partnerName}</span>
                  </div>
                </td>

                {/* Vendor */}
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <img
                      src={order.vendorAvatar}
                      alt="Vendor"
                      className="size-[24px] rounded-full object-cover"
                    />
                    <span className="text-[16px]">{order.vendorName}</span>
                  </div>
                </td>

                {/* Amount */}
                <td className="px-4 py-3 font-bold text-[18px]">{order.amount}</td>

                {/* Order Details */}
                <td className="px-4 py-3 text-[16px]">
                  {order.details}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
