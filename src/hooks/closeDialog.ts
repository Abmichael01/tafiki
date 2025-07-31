// hooks/useCloseDialog.ts
import { useDialogStore } from "@/stores/dialogStore";
import { useLocation, useNavigate } from "react-router-dom";

export function useCloseDialog(dialogKey: string) {
  const { closeDialog } = useDialogStore();
  const navigate = useNavigate();
  const location = useLocation();

  const close = () => {
    closeDialog(dialogKey);

    // Remove the dialog from the query string
    const params = new URLSearchParams(location.search);
    if (params.get("dialog") === dialogKey) {
      params.delete("dialog");
    }
    // Optionally remove related params (e.g., "current") if needed
    // params.delete("current");

    navigate({
      pathname: location.pathname,
      search: params.toString() ? `?${params.toString()}` : "",
    });
  };

  return close;
}
