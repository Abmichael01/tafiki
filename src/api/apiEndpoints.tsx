import apiClient from "./apiClient";
import {
  AddToCartData,
  BeneficiaryData,
  FundWalletData,
  PartnerSigninData,
  PartnerSignupData,
  ResponseData,
  ShopProduct,
  TransactionPinData,
  UserDetails,
  ViewCartData,
  WalletTransactionResponse,
} from "@/types";

// Auth

export const partnerSignup = async (
  data: Partial<PartnerSignupData>,
  options: { method: "POST" | "PATCH" }
): Promise<unknown> => {
  const url = "/users/signup/partner/";

  if (options.method === "POST") {
    const res = await apiClient.post(url, data);
    return res.data;
  } else if (options.method === "PATCH") {
    const res = await apiClient.patch(url, data);
    return res.data;
  }

  throw new Error("Invalid method");
};

export const verifyOtp = async (
  data: Partial<PartnerSignupData>
): Promise<unknown> => {
  const res = await apiClient.post("/users/verify-otp/partner/", data);
  return res.data;
};

export const partnerSignin = async (
  data: Partial<PartnerSigninData>
): Promise<ResponseData> => {
  const res = await apiClient.post("/users/signin/partner/", data);
  return res.data;
};

export const forgotPassword = async (
  data: Partial<PartnerSignupData>
): Promise<ResponseData> => {
  const res = await apiClient.post("/users/forgot-password/partner/", data);
  return res.data;
};

// Shop
export const getShopProducts = async (): Promise<ShopProduct[]> => {
  const res = await apiClient.get("/shops/products/");
  return res.data;
};

export const getShopProduct = async (id: string): Promise<ShopProduct> => {
  const res = await apiClient.get(`/shops/products/${id}/`);
  return res.data;
};

// Cart
export const addProductToCart = async (
  data: AddToCartData
): Promise<unknown> => {
  const res = await apiClient.post("/cart/addproducttocart/", data);
  return res.data;
};

export const removeProductFromCart = async (
  data: Partial<AddToCartData>
): Promise<unknown> => {
  const res = await apiClient.delete("/cart/remove/", {
    data,
  });
  return res.data;
};

export const viewCart = async (): Promise<ViewCartData> => {
  const res = await apiClient.get("/cart/viewcart/");
  return res.data;
};

export const checkoutCart = async (data: { transaction_pin: string }): Promise<unknown> => {
  const res = await apiClient.post("/cart/checkoutcart/", data);
  return res.data;
};






// Wallet
export const getBeneficiaries = async (): Promise<BeneficiaryData[]> => {
  const res = await apiClient.get("/wallet/beneficiaries/");
  return res.data;
};

export const addBeneficiary = async (
  data: BeneficiaryData
): Promise<unknown> => {
  const res = await apiClient.post("/wallet/beneficiaries/", data);
  return res.data;
};

export const deleteBeneficiary = async (id: number): Promise<unknown> => {
  const res = await apiClient.delete(`/wallet/beneficiaries/${id}/`);
  return res.data;
};

export const walletWithdrawal = async (data: {
  amount: number;
  to: string;
  transaction_pin: string;
}): Promise<unknown> => {
  const res = await apiClient.post("/wallet/withdraw/", data);
  return res.data;
};


export const fundWallet = async (data: FundWalletData): Promise<unknown> => {
  const res = await apiClient.post("/wallet/fund/", data);
  return res.data;
};

export const getWalletTransactions = async (): Promise<WalletTransactionResponse> => {
  const res = await apiClient.get("/users/transactionhistory/partner/");
  return res.data;
};






// User

export const getCurrentUser = async (): Promise<UserDetails> => {
  const res = await apiClient.get("/users/getDetails/");
  return res.data;
};

export const setTransactionPin = async (
  data?: Partial<TransactionPinData>
): Promise<unknown> => {
  console.log(data)
  const res = await apiClient.post("/users/setpin/partner/", data);
  return res.data;
};

export const checkTransactionPin = async (data: {
  password: string;
}): Promise<{"Transaction pin": string}> => {
  console.log(data);
  const res = await apiClient.post("/users/retrieve-pin/partner/", data);
  return res.data;
};


export const changePassword = async (
  data: { old_password: string; new_password: string }
): Promise<unknown> => {
  const res = await apiClient.post("/users/change-password/partner/", data);
  return res.data;
};

export const updateProfile = async (data: FormData): Promise<unknown> => {
  const res = await apiClient.patch("/users/profile/update/partner/", data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res.data;
};
