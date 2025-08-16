export const getInitials = (name: string) => {
    // Handle null, undefined, or empty string
    if (!name || typeof name !== "string" || name.trim().length === 0) {
        // Debug: No name provided
        // Print("getInitials: No name provided");
        return "";
    }

    // Split by whitespace, filter out empty strings (handles multiple spaces)
    const parts = name.trim().split(/\s+/).filter(Boolean);

    // Debug: Show split parts
    // Print(`getInitials: parts = ${JSON.stringify(parts)}`);

    if (parts.length === 0) {
        // Debug: Name is only whitespace
        // Print("getInitials: Name is only whitespace");
        return "";
    }

    if (parts.length === 1) {
        // Debug: Only one name part
        // Print(`getInitials: Single part = ${parts[0][0]}`);
        return parts[0][0].toUpperCase();
    }

    // More than one part: use first letter of first and second part
    // Debug: Two initials
    // Print(`getInitials: Initials = ${parts[0][0]}${parts[1][0]}`);
    return (parts[0][0] + parts[1][0]).toUpperCase();
}