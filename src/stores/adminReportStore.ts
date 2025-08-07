import { AdminReport } from "@/types/admin";
import { create } from "zustand";

interface AdminReportState {
  report: AdminReport | null;
  setReport: (report: AdminReport) => void;
  clearReport: () => void;
}

export const useAdminReportStore = create<AdminReportState>((set) => ({
  report: null,
  setReport: (report) => set({ report }),
  clearReport: () => set({ report: null }),
}));


