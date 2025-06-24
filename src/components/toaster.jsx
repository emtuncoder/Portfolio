import * as React from "react";
import { useToast } from "@/hooks/use-toast";

export const Toaster = () => {
  const { toasts, dismiss } = useToast();

  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        toast.open && (
          <div
            key={toast.id}
            className="bg-background border border-border text-foreground shadow-lg p-4 rounded-lg min-w-[250px] max-w-sm"
          >
            <div className="font-semibold">{toast.title}</div>
            {toast.description && (
              <div className="text-sm text-muted-foreground mt-1">
                {toast.description}
              </div>
            )}
            <button
              onClick={() => dismiss(toast.id)}
              className="mt-2 text-xs text-primary underline"
            >
              Dismiss
            </button>
          </div>
        )
      ))}
    </div>
  );
};
