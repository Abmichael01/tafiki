import { Order } from "@/types/admin";

// Statuses for ongoing: 'pending', 'in-transit', 'delivered', 'settlement pending'
// For history: use 'return-settled'

export const ongoingOrders: Order[] = []
export const historyOrders: Order[] = []