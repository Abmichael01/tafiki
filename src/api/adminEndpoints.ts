import { AdminReport, ApproveData, Notification, Order, Orders, Overview,PartnerDetails, StatusData, Transactions, VendorDetails, Vendors } from "@/types/admin";
import apiClient, { formDataClient } from "./apiClient";
import { WithdrawalData } from "@/types/admin";

export const getAdminReport = async (): Promise<AdminReport> => {
  const res = await apiClient.get("/users/admin/partners/");
  return res.data;
};

export const getPartner = async (id: string): Promise<PartnerDetails> => {
  const res = await apiClient.get(`/users/admin/partners/${id}`);
  return res.data;
};

export const deletePartner = async (id: string): Promise<unknown> => {
  const res = await apiClient.delete(`/users/partners/${id}/delete`);
  return res.data;
};

export const getOverview = async (): Promise<Overview> => {
  const res = await apiClient.get("/users/admin/overview/");
  return res.data;
};

export const getTransactions = async (): Promise<Transactions> => {
  const res = await apiClient.get("/users/alltransactionHistory/admin/");
  return res.data;
};

export const getOrders = async (): Promise<Orders> => {
  const res = await apiClient.get("/users/admin/orders/");
  return res.data;
};

export const getOrder = async (id: string): Promise<Order> => {
  const res = await apiClient.get(`/users/admin/orders/${id}/`);
  return res.data;
};

export const updateOrderStatus = async (data: StatusData): Promise<unknown> => {
  const res = await apiClient.patch(`users/admin/updateStatus/`, data);
  return res.data;
};

export const getWithdrawalList = async (): Promise<WithdrawalData[]> => {
  const res = await apiClient.get("/users/admin/withdrawal/");
  return res.data;
};

export const approveWithdrawal = async (id: string, data: Partial<ApproveData>): Promise<unknown> => {
  const res = await apiClient.post(`/users/admin/approve-withdrawals/${id}/`, data);
  return res.data;
};

export const addProduct = async (data: FormData): Promise<unknown> => {
  const res = await formDataClient.post(`/shops/addproduct/`, data);
  return res.data;
};

export const deleteProduct = async (id: string): Promise<unknown> => {
  const res = await apiClient.delete(`/shops/products/delete/${id}/`);
  return res.data;
};

export const restockProduct = async (id: number, quantity: string): Promise<unknown> => {
  const res = await apiClient.put(`/shops/products/update/${id}/`, {quantity});
  return res.data;
};

export const updateProduct = async (id: number, data: FormData): Promise<unknown> => {
  const res = await apiClient.put(`/shops/products/update/${id}/`, data);
  return res.data;
};

export const createVendor = async (data: FormData): Promise<unknown> => {
  const res = await apiClient.post("/users/vendors/create/", data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res.data;
};

export const updateVendor = async (data: FormData, id: string): Promise<unknown> => {
  const res = await apiClient.put(`/users/vendors/${id}/update/`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res.data;
};

export const deleteVendor = async (id: string): Promise<unknown> => {
  const res = await apiClient.delete(`/users/vendors/${id}/delete/`);
  return res.data;
};

export const getVendorsist = async (): Promise<Vendors> => {
  const res = await apiClient.get("/users/admin/vendors/dashboard/");
  return res.data;
};

export const getVendor = async (id: string): Promise<VendorDetails> => {
  const res = await apiClient.get(`/users/admin/vendors/${id}/`);
  return res.data;
};


export const getNotifications = async (): Promise<Notification[]> => {
  const res = await apiClient.get(`/users/admin/notification/`);
  return res.data;
};

export const approveRemittance = async (remittance_id: string, action: "approve" | "reject"): Promise<unknown> => {
  const res = await apiClient.post(`/wallet/remittance/${remittance_id}/approve/`, { action });
  return res.data;
};


