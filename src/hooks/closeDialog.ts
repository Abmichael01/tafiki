// hooks/useCloseDialog.ts
import { useDialogStore } from "@/stores/dialogStore";
import { useLocation, useNavigate } from "react-router-dom";

export function useCloseDialog(dialogKey: string) {
  const { closeDialog } = useDialogStore();
  const navigate = useNavigate();
  const location = useLocation();

  const close = () => {
    closeDialog(dialogKey);
    navigate(location.pathname); // stays on the same page, useful for refreshing route state
  };

  return close;
}
