export type Order = {
  id: string;
  orderNumber: string;
  timestamp: string;
  partner: {
    name: string;
    avatar: string;
  };
  vendor: {
    name: string;
    avatar: string;
  };
  amount: number;
  currency: string;
  items: string;
  date?: string; // For grouping in history
}