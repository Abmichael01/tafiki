import React from "react";
import { Plus, ArrowUpRight, Package } from "lucide-react";

export interface Notification {
  id: string;
  type: string;
  message: string;
  time: string;
  amount?: string;
}

interface NotificationsListProps {
  notifications: Notification[];
}

const NotificationsList: React.FC<NotificationsListProps> = ({
  notifications,
}) => {
  // Helper function to format date for display
  const formatDisplayDate = (dateString: string) => {
    const notificationDate = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    // Reset time to compare only dates
    const notificationDateOnly = new Date(
      notificationDate.getFullYear(),
      notificationDate.getMonth(),
      notificationDate.getDate()
    );
    const todayOnly = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );
    const yesterdayOnly = new Date(
      yesterday.getFullYear(),
      yesterday.getMonth(),
      yesterday.getDate()
    );

    if (notificationDateOnly.getTime() === todayOnly.getTime()) {
      return "Today";
    } else if (notificationDateOnly.getTime() === yesterdayOnly.getTime()) {
      return "Yesterday";
    } else {
      return notificationDate.toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
    }
  };

  // Helper function to format time for display
  const formatDisplayTime = (dateString: string) => {
    const date = new Date(dateString);
    return date
      .toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })
      .toLowerCase();
  };

  // Get icon and styling based on notification type
  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "remittance":
        return {
          icon: <Plus className="size-5" />,
          bgColor: "bg-[#16A34A1A]",
          textColor: "text-[#16A34A]",
        };
      case "withdrawal":
        return {
          icon: <ArrowUpRight className="size-5" />,
          bgColor: "bg-[#B522171A]",
          textColor: "text-[#B52217]",
        };
      case "order":
        return {
          icon: <Package className="size-5" />,
          bgColor: "bg-primary/10",
          textColor: "text-primary",
        };
      default:
        return {
          icon: <Plus className="size-5" />,
          bgColor: "bg-primary/10",
          textColor: "text-primary",
        };
    }
  };

  // Group notifications by date
  const groupedNotifications = notifications.reduce((groups, notification) => {
    const displayDate = formatDisplayDate(notification.time);

    if (!groups[displayDate]) {
      groups[displayDate] = [];
    }
    groups[displayDate].push(notification);
    return groups;
  }, {} as Record<string, Notification[]>);

  const renderNotification = (notification: Notification) => {
    const { icon, bgColor, textColor } = getNotificationIcon(notification.type);

    return (
      <div
        key={notification.id}
        className="flex items-center gap-3 py-1 px-4 font-satoshi"
      >
        {/* Icon */}
        <div
          className={`flex items-center justify-center p-2 rounded-full ${bgColor} ${textColor} flex-shrink-0`}
        >
          {icon}
        </div>

        {/* Message */}
        <div className="flex-1 min-w-0">
          <p className=" text-[14px] sm:text-[16px] font-medium">{notification.message}</p>
        </div>

        {/* Time */}
        <div className="text-[14px] text-gray-500 whitespace-nowrap flex-shrink-0">
          {formatDisplayTime(notification.time)}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white space-y-4">
      {Object.entries(groupedNotifications).map(([date, dateNotifications]) => (
        <div key={date} className="space-y-2">
          {/* Date Header */}
          <h3 className="text-sm font-medium text-gray-500 px-4 pt-2">
            {date}
          </h3>

          {/* Notifications for this date */}
          <div className="space-y-5">
            {dateNotifications.map((notification) =>
              renderNotification(notification)
            )}
          </div>
        </div>
      ))}

      {notifications.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500 text-sm">No notifications</p>
        </div>
      )}
    </div>
  );
};

export default NotificationsList;
