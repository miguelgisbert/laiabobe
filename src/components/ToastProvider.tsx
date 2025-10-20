"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Toast context
export type ToastType = "success" | "error";
export interface Toast {
  type: ToastType;
  message: string;
}
interface ToastContextType {
  showToast: (toast: Toast) => void;
}
const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<Toast | null>(null);
  const [visible, setVisible] = useState(false);

  const showToast = (toast: Toast) => {
    setToast(toast);
    setVisible(true);
    setTimeout(() => setVisible(false), 5000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && visible && (
        <div
          className={`fixed top-6 left-1/2 z-[9999] -translate-x-1/2 flex items-center gap-3 px-5 py-3 rounded-xl shadow-md text-base font-medium transition-all duration-300
            bg-white border
            ${toast.type === "success" ? "border-green-300" : "border-red-300"}
          `}
          style={{
            minWidth: 280,
            maxWidth: 400,
            boxShadow: "0 2px 16px 0 rgba(0,0,0,0.10)",
          }}
        >
          <span
            className={`inline-flex items-center justify-center rounded-full h-7 w-7 text-lg
            ${
              toast.type === "success"
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-600"
            }
          `}
          >
            {toast.type === "success" ? (
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="10" fill="#bbf7d0" />
                <path
                  d="M6 10.5l2.5 2.5 5-5"
                  stroke="#22c55e"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="10" fill="#fecaca" />
                <path
                  d="M7 7l6 6M13 7l-6 6"
                  stroke="#ef4444"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </span>
          <span className="text-gray-800">{toast.message}</span>
        </div>
      )}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}
