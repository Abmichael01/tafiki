import React from "react";
import { Plus, ArrowUpRight, Package } from "lucide-react";
import { Notification } from "@/types/admin";

interface NotificationsListProps {
  notifications?: Notification[]; // Make notifications optional for safety
}

const NotificationsList: React.FC<NotificationsListProps> = ({
  notifications = [],
}) => {
  // Helper function to format date for display
  const formatDisplayDate = (dateString?: string) => {
    if (!dateString) {
      // Debug: Missing date string
      console.warn("Notification missing created_at date:", dateString);
      return "Unknown Date";
    }
    const notificationDate = new Date(dateString);
    if (isNaN(notificationDate.getTime())) {
      // Debug: Invalid date string
      console.warn("Invalid notification date:", dateString);
      return "Invalid Date";
    }
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
  const formatDisplayTime = (dateString?: string) => {
    if (!dateString) {
      // Debug: Missing date string
      console.warn("Notification missing created_at time:", dateString);
      return "--:--";
    }
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      // Debug: Invalid date string
      console.warn("Invalid notification time:", dateString);
      return "--:--";
    }
    return date
      .toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })
      .toLowerCase();
  };

  // Get icon and styling based on notification type
  const getNotificationIcon = (type?: string) => {
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
        // Debug: Unknown notification type
        if (type !== undefined) {
          console.warn("Unknown notification type:", type);
        }
        return {
          icon: <Plus className="size-5" />,
          bgColor: "bg-primary/10",
          textColor: "text-primary",
        };
    }
  };

  // Group notifications by date
  const groupedNotifications = React.useMemo(() => {
    if (!Array.isArray(notifications) || notifications.length === 0) {
      // Debug: No notifications to group
      return {};
    }
    return notifications.reduce((groups, notification) => {
      const displayDate = formatDisplayDate(notification?.created_at);

      if (!groups[displayDate]) {
        groups[displayDate] = [];
      }
      groups[displayDate].push(notification);
      return groups;
    }, {} as Record<string, Notification[]>);
  }, [notifications]);

  const renderNotification = (notification: Notification) => {
    if (!notification) {
      // Debug: Notification is undefined/null
      console.warn("Tried to render undefined notification:", notification);
      return null;
    }
    const { icon, bgColor, textColor } = getNotificationIcon(notification.type);

    return (
      <div
        key={notification.id ?? Math.random()}
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
          <p className=" text-[14px] sm:text-[16px] font-medium">
            {notification.message || "No message"}
          </p>
        </div>

        {/* Time */}
        <div className="text-[14px] text-gray-500 whitespace-nowrap flex-shrink-0">
          {formatDisplayTime(notification.created_at)}
        </div>
      </div>
    );
  };

  // Debug: Print grouped notifications for tracing
  React.useEffect(() => {
    // Only print in development
    if (process.env.NODE_ENV === "development") {
      // eslint-disable-next-line no-console
      console.log("Grouped Notifications:", groupedNotifications);
    }
  }, [groupedNotifications]);

  return (
    <div className="bg-white space-y-4">
      {groupedNotifications && Object.entries(groupedNotifications).length > 0 ? (
        Object.entries(groupedNotifications).map(([date, dateNotifications]) => (
          <div key={date} className="space-y-2">
            {/* Date Header */}
            <h3 className="text-sm font-medium text-gray-500 px-4 pt-2">
              {date}
            </h3>

            {/* Notifications for this date */}
            <div className="space-y-5">
              {Array.isArray(dateNotifications) && dateNotifications.length > 0 ? (
                dateNotifications.map((notification) =>
                  renderNotification(notification)
                )
              ) : (
                <div className="text-center py-4">
                  <p className="text-gray-400 text-xs">No notifications for this date</p>
                </div>
              )}
            </div>
          </div>
        ))
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-500 text-sm">No notifications</p>
        </div>
      )}
    </div>
  );
};

export default NotificationsList;
