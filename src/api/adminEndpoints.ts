import { AdminReport } from "@/types/admin";
import apiClient from "./apiClient";

export const getAdminReport = async (): Promise<AdminReport> => {
  const res = await apiClient.get("/users/admin/report/");
  return res.data;
};
