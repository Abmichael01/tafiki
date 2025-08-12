import { useQueryClient } from "@tanstack/react-query"

export default function InvalidateQuery(data: string[]) {
    const queryClient = useQueryClient()
    queryClient.invalidateQueries({ queryKey: data })
}
