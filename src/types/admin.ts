import { Order as IndexOrder } from './index';

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
  status?: string;
}

export type Partner = {
  name: string;
  email: string;
  username: string;
  total_purchase: number;
  total_orders: number;
  balance: number;
  portfolio_balance: number;
}

export type AdminReport = {
  total_partners: number;
  total_investment: number;
  partners: Partner[];
  all_orders: IndexOrder[];
}

