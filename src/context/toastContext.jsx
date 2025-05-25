// src/contexts/ToastContext.jsx
import { createContext, useContext, useState, useCallback } from "react";
import { createPortal } from "react-dom";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const show = useCallback((message, type = "info") => {
        const id = Date.now();
        setToasts((prev) => [...prev, { id, message, type }]);

        setTimeout(() => {
            setToasts((prev) => prev.filter((t) => t.id !== id));
        }, 5000);
    }, []);

    return (
        <ToastContext.Provider value={{ show }}>
            {children}
            {createPortal(<ToastContainer toasts={toasts} />, document.body)}
        </ToastContext.Provider>
    );
};

export const useToast = () => {
    const { show } = useContext(ToastContext);
    return {
        success: (msg) => show(msg, "success"),
        error: (msg) => show(msg, "error"),
        info: (msg) => show(msg, "info"),
    };
};

// Render all toasts
const ToastContainer = ({ toasts }) => (
    <div className="fixed bottom-4 end-4 z-[9999] flex flex-col gap-2">
        {toasts.map((toast) => (
            <Toast key={toast.id} message={toast.message} type={toast.type} />
        ))}
    </div>
);

// Custom Toast component with design
const Toast = ({ message, type }) => {
    const iconColor =
        type === "success"
            ? "text-teal-500"
            : type === "error"
            ? "text-red-500"
            : "text-blue-500";

    return (
        <div
            className="w-60 border rounded-xl shadow-lg bg-neutral-800 border-neutral-700"
            role="alert"
            tabIndex="-1"
            aria-labelledby="toast-message"
        >
            <div className="flex p-4">
                <div className="shrink-0">
                    <svg
                        className={`shrink-0 size-4 mt-0.5 ${iconColor}`}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                </div>
                <div className="ms-3">
                    <p id="toast-message" className="text-sm text-neutral-400">
                        {message}
                    </p>
                </div>
            </div>
        </div>
    );
};
