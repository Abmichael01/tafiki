import { Order as IndexOrder } from './index';

export type Order = {
  id: number;
  order_id: string;
  created_at: string;
  partner_name: string;
  vendor_name: string;
  product: unknown[]; // You may want to define a Product type if structure is known
  total_amount: number;
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

export type DataBaseType = {
  count: number;
  next: number | null;
  previous: number | null;
}

export type Vendor = {
  id: number;
  vendor_id: string;
  name: string;
  email: string;
  phone: string;
  profile_picture: string | null;
  created_at: string;
};

export type Vendors = DataBaseType & {
  results: Vendor[]
}

export type Transaction = {
  id: number;
  amount: string;
  available_balance_at_time: string;
  created_at: string;
  from_user: string;
  order_id: string;
  partner_name: string;
  payment_method: string;
  reference: string;
  status: string;
  to: string;
  transaction_type: string;
  user: number;
}

export type Transactions = DataBaseType & {
  results: Transaction[]
}

export type Orders = DataBaseType & {
  results: Order[];
} 

export type WithdrawalData = {
  approved_withdrawals_amount: number;
  approved_withdrawals_count: number;
  pending_withdrawals_amount: number;
  pending_withdrawals_count: number;
  user_id: number;
  user_name: string;
};
