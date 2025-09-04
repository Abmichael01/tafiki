interface ApiError extends Error {
  response?: {
    status?: number;
    data:
      | {
          detail?: string;
          message?: string;
          error?: string;
          email?: string;
          username?: string;
          password?: string;
          tracking_id?: string;
        }
      | string
      | string[]
      | Record<string, string[]>;
  };
}

export default function errorMessage(error: ApiError | null): string {
  const data = error?.response?.data;
  const status = error?.response?.status;

  // Get the error message
  let message = "";
  
  if (typeof data === "string") {
    message = data;
  } else if (Array.isArray(data)) {
    message = data[0];
  } else if (typeof data === "object" && data !== null) {
    message = (
      data.detail ??
      data.message ??
      data.error ??
      data.email ??
      data.username ??
      data.password ??
      (data.tracking_id && "Generate a new tracking id") ??
      // Try to grab first error from any key like { field: ["some error"] }
      Object.values(data)[0]?.[0] ??
      error?.message
    );
  } else {
    message = error?.message || "";
  }

  // If message is too long (more than 100 characters), show status message instead
  if (message && message.length > 100) {
    if (status) {
      return `Request failed with status ${status}`;
    } else {
      return "Request failed";
    }
  }

  // If no message but we have status, show status message
  if (!message && status) {
    return `Request failed with status ${status}`;
  }

  // If no message and no status, show generic error
  if (!message) {
    return "An error occurred";
  }

  return message;
}