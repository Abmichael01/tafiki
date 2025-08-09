import { AdminReport, Vendor, Vendors } from "@/types/admin";
import apiClient, { formDataClient } from "./apiClient";

export const getAdminReport = async (): Promise<AdminReport> => {
  const res = await apiClient.get("/users/admin/report/");
  return res.data;
};

export const getTransactions = async (): Promise<unknown> => {
  const res = await apiClient.get("/users/alltransactionHistory/admin/");
  return res.data;
};

export const getOrders = async (): Promise<unknown> => {
  const res = await apiClient.get("/users/admin/orders/");
  return res.data;
};

export const getWithdrawalList = async (): Promise<unknown> => {
  const res = await apiClient.get("/users/admin/withdrawal/");
  return res.data;
};

export const approveWithdrawal = async (id: number): Promise<unknown> => {
  const res = await apiClient.post(`/users/admin/approve-withdrawals/${id}/`);
  return res.data;
};

export const addProduct = async (data: FormData): Promise<unknown> => {
  const res = await formDataClient.post(`/shops/addproduct/`, data);
  return res.data;
};

export const deleteProduct = async (id: number): Promise<unknown> => {
  const res = await apiClient.post(`/shops/product/delete/${id}/`);
  return res.data;
};

export const updateProduct = async (id: number, quantity: string): Promise<unknown> => {
  const res = await apiClient.put(`/shops/products/update/${id}/`, {quantity});
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

export const getVendorsist = async (): Promise<Vendors> => {
  const res = await apiClient.get("/users/vendors/");
  return res.data;
};

export const getVendor = async (id: number): Promise<Vendor> => {
  const res = await apiClient.get(`/users/vendors/${id}/`);
  return res.data;
};







