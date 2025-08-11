import { Vendor } from "./admin";

export type User = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  password: string;
};

// ...existing code...

export type PersonalDetails = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  username: string;
};

export type ShopProduct = {
  id?: number;
  name: string;
  price: string;
  product_id?: string;
  roi_percentage: number | string;
  stock_quantity: number | string;
  description: string;
  kg_per_unit: number | string;
  quantity_per_unit: number | string;
  images?: File[]
}

export type Order = {
  amount_invested: number;
  created_at: string;
  order_id: string;
  roi_expected: number;
  total_roi_paid: number;
  roi_pending: number;
  roi_rate: number;
  status: string;
  product: ShopProduct[];
  future_roi: number;
  payout_schedule: {
    payout_date: string;
    amount: number;
  }[];
};

export type RoiOverTime = {
  date: string;
  total: number;
}

export type UserDetails = {
  daily_roi: number;
  total_roi: number;
  total_roi_expected: number;
  total_roi_paid: number;
  roi_pending: number;
  total_invested: number;
  wallet_balance: number;
  investment_summary: Order[]; // You might want to create a specific type for this
  roi_over_time: RoiOverTime[]; // You might want to create a specific type for this
  personal_details: PersonalDetails;
  has_pin: boolean;
  profile_picture: string | null;
};

export type PartnerSignupData = {
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  password: string;
  otp: string;
};

export type PartnerSigninData = {
  username: string;
  password: string;
  user_type: string;
};

export type ResponseData = {
  detail?: string;
  tokens?: { access: string; refresh: string };
  message?: string;
};



export type BeneficiaryData = {
  id?: number;
  bank_name: string;
  account_number: string;
  name: string;
}

export type WithdrawalData = {
  amount: number;
  to: BeneficiaryData;
  transaction_pin: string;
}

export type TransactionPinData = {
  transaction_pin?: string;
  otp?: string;
  pin?: string;
}

export type AddToCartData = {
  product_id: string;
  quantity: number;
}

export type RoiCycle = {
  cycle: number;
  amount: number;
  payout_date: string;
};

export type CartItem = {
  product_id: string;
  product_name: string;
  quantity: number;
  price: number;
  total_amount: number;
  roi_percentage: number;
  total_roi: number;
  roi_cycles: RoiCycle[];
};

export type ViewCartData = {
  total_items: number;
  items: CartItem[];
};


export type WithdrawalPinFormData = {
  transaction_pin: string;
  otp: string;
  pin: string;
}

export type FundWalletData = {
  amount: number;
  payment_method: string;
}

export type ChangePasswordData = {
  old_password: string;
  new_password: string;
}

export type Transaction = {
  type: string;
  time: string;
  amount: string;
}


export type WalletTransaction = {
  id: number;
  amount: string;
  from_user: string;
  to: string;
  transaction_type: 'fund' | 'withdraw' | 'investment'; // Add other types if needed
  status: 'completed' | 'pending' | 'failed'; // Add other statuses if needed
  created_at: string;
  available_balance_at_time: string;
  payment_method: string;
}

export type WalletTransactionResults = {
  summary: unknown[];
  transactions: WalletTransaction[];
}

export type WalletTransactionResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: WalletTransactionResults;
}


export type Vendors =  {
  count: number;
  next: string | null;
  previous: string | null;
  results: Vendor[]
}

