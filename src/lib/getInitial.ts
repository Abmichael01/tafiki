export const getInitials = (name: string) => {
    const first = name?.split(" ")[0][0] || ""
    const second = name?.split(" ")[1][0] || ""

    return first+second
}