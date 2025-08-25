import React from "react";
import { Order } from "@/types/admin";
import { formatDisplayTime } from "@/lib/formatDateTime";
import orderBox from "@/assets/svgs/orderBox2.svg";

interface OrderCardProps {
  order: Order;
}

const OrderCard: React.FC<OrderCardProps> = ({ order }) => {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
      case "delivered":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "processing":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-sm transition-shadow duration-200">
      {/* Header */}
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-3">
          <img src={orderBox} alt="Order" className="h-8 w-8" />
          <div>
            <h3 className="font-semibold text-gray-900">
              Order #{order.order_id}
            </h3>
            <p className="text-sm text-gray-500">
              {formatDisplayTime(order.created_at)}
            </p>
          </div>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
          {order.status}
        </span>
      </div>

      {/* Partner Info */}
      <div className="mb-3">
        <span className="text-sm text-gray-600">
          Partner: <span className="font-medium">{order.partner_name}</span>
        </span>
      </div>

      {/* Amount */}
      <div className="mb-3">
        <span className="text-sm text-gray-600">
          Amount: <span className="font-semibold text-primary">₦{order.total_amount?.toLocaleString()}</span>
        </span>
      </div>

      {/* ROI Info */}
      {order.total_roi && (
        <div className="mb-3">
          <span className="text-sm text-gray-600">
            ROI: <span className="font-semibold text-green-600">₦{order.total_roi?.toLocaleString()}</span>
            {order.roi_rate && (
              <span className="text-xs text-gray-500 ml-1">({order.roi_rate}%)</span>
            )}
          </span>
        </div>
      )}

      {/* Products */}
      {order.products && order.products.length > 0 && (
        <div className="mb-3">
          <span className="text-sm text-gray-600">Products:</span>
          <div className="mt-1">
            {order.products.map((product, index) => (
              <span key={index} className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded mr-1 mb-1">
                {product}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* ROI Cycles */}
      {order.roi_cycles && order.roi_cycles.length > 0 && (
        <div className="mb-3">
          <span className="text-sm text-gray-600">ROI Cycles:</span>
          <div className="mt-1 space-y-1">
            {order.roi_cycles.slice(0, 3).map((cycle, index) => (
              <div key={index} className="flex justify-between text-xs">
                <span className="text-gray-600">Cycle {cycle.cycle}:</span>
                <span className="font-medium">₦{cycle.amount?.toLocaleString()}</span>
              </div>
            ))}
            {order.roi_cycles.length > 3 && (
              <span className="text-xs text-gray-500">
                +{order.roi_cycles.length - 3} more cycles
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderCard;
