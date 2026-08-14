"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Toaster = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const next_themes_1 = require("next-themes");
const sonner_1 = require("sonner");
const Toaster = ({ ...props }) => {
    const { theme = "system" } = (0, next_themes_1.useTheme)();
    return ((0, jsx_runtime_1.jsx)(sonner_1.Toaster, { theme: theme, className: "toaster group", toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-white group-[.toaster]:text-black group-[.toaster]:border-[3px] group-[.toaster]:border-black group-[.toaster]:shadow-[var(--shadow-comic)] group-[.toaster]:rounded-[var(--radius-comic)] transition-all active:translate-x-[4px] active:translate-y-[4px] active:shadow-none",
                success: "group-[.toaster]:bg-green-400 group-[.toaster]:text-black group-[.toaster]:border-black",
                error: "group-[.toaster]:bg-red-400 group-[.toaster]:text-black group-[.toaster]:border-black",
                warning: "group-[.toaster]:bg-yellow-400 group-[.toaster]:text-black group-[.toaster]:border-black",
                info: "group-[.toaster]:bg-blue-400 group-[.toaster]:text-white group-[.toaster]:border-black",
                title: "text-sm font-black uppercase tracking-wider",
                description: "group-[.toast]:text-black/80 group-data-[type]:text-current text-sm font-bold opacity-90",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground group-[.toast]:shadow-[var(--shadow-comic-sm)] font-black uppercase tracking-wider text-xs h-8 px-3 border-[2px] border-black rounded-[var(--radius-comic)]",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground group-[.toast]:border-[2px] group-[.toast]:border-black group-[.toast]:rounded-[var(--radius-comic)] font-black uppercase tracking-wider text-xs h-8 px-3",
                closeButton: "group-[.toast]:border-[2px] group-[.toast]:border-black group-[.toast]:bg-white group-[.toast]:text-black hover:group-[.toast]:bg-black/10 group-[.toast]:rounded-[var(--radius-comic)] active:translate-x-[2px] active:translate-y-[2px] transition",
            },
        }, ...props }));
};
exports.Toaster = Toaster;
