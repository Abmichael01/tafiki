import { Order as IndexOrder } from "./index";

export type Order = {
  id: number;
  order_id: string;
  created_at: string;
  partner_name: string;
  vendor_name: string;
  product: unknown[]; // You may want to define a Product type if structure is known
  total_amount: number;
  status: string;
  amount: number
};

export type Partner = {
  name: string;
  email: string;
  username: string;
  total_purchase: number;
  total_orders: number;
  balance: number;
  portfolio_balance: number;
  partner_id: number;
  address: string;
  phone: string
};

export type PartnerDetails = {
  partner: Partner;
  orders: Order[];
  summary: {
    total_invested: number;
    total_orders: number;
    balance: number;
  };
  transactions: Transaction[];
}

export type AdminReport = {
  total_partners: number;
  total_investment: number;
  partners: Partner[];
  all_orders: IndexOrder[];
};

export type DataBaseType = {
  count: number;
  next: number | null;
  previous: number | null;
};

export type Vendor = {
  id: number;
  vendor_id: string;
  name: string;
  email: string;
  phone: string;
  profile_picture: string | null;
  created_at: string;
  total_remittance: number;
  today_remittance: number;
  recent_orders?: Order[];
};

export type Vendors = {
  total_vendors: number;
  total_remittance: number;
  today_remittance: number;
  vendors: Vendor[];
};

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
};

export type Transactions = DataBaseType & {
  results: Transaction[];
};

export type Orders = DataBaseType & {
  results: Order[];
};

export type WithdrawalData = {
  pending_withdrawals_amount: number;
  pending_withdrawals_count: number;
  user_id: number;
  user_name: string;
};

export type Overview = {
  pending_withdrawals: number;
  total_balance: number;
  todays_remittance: number;
  recent_orders: Order[];
  withdrawal_request: WithdrawalData[];
};

export type VendorDetails =  {
  total_remittance: number;
  today_remittance: number;
  vendor_details: Vendor;
}