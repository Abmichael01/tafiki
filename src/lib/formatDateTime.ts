export const formatDisplayTime = (dateString: string, options?: { 
    showTime?: boolean, 
    showYear?: boolean, 
    showDate?: boolean,
    isRelative?: boolean // New prop for today/yesterday formatting
  }) => {
    const date = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset today's time to midnight
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1); // Set yesterday's date
  
    // Default options to show time, date, and year
    const showTime = options?.showTime ?? true;
    const showDate = options?.showDate ?? true;
    const showYear = options?.showYear ?? true;
    const isRelative = options?.isRelative ?? false; // Whether to show "Today" or "Yesterday"
  
    // Time formatting (only if showTime is true)
    const timePart = showTime ? date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }) : '';
  
    // Date formatting (only if showDate is true)
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "short" });
  
    // Get ordinal suffix for the day
    const getOrdinal = (n: number) => {
      if (n > 3 && n < 21) return "th";
      switch (n % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
      }
    };
  
    const datePart = showDate ? `${day}${getOrdinal(day)} ${month}` : '';
  
    // Year formatting (only if showYear is true)
    const yearPart = showYear ? `, ${date.getFullYear()}` : '';
  
    // Relative time logic (Today or Yesterday)
    let relativePart = '';
    if (isRelative) {
      if (date.setHours(0, 0, 0, 0) === today.getTime()) {
        relativePart = 'Today';
      } else if (date.setHours(0, 0, 0, 0) === yesterday.getTime()) {
        relativePart = 'Yesterday';
      }
    }
  
    // Combine the parts: Time, Date, Year, and Relative
    return `${relativePart ? relativePart : `${timePart}${timePart && datePart ? ', ' : ''}${datePart}${yearPart}`}`;
  };
  