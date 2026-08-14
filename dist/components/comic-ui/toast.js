"use strict";
"use client";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToastAction = exports.ToastClose = exports.ToastDescription = exports.ToastTitle = exports.Toast = exports.ToastViewport = exports.ToastProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const ToastPrimitives = __importStar(require("@radix-ui/react-toast"));
const class_variance_authority_1 = require("class-variance-authority");
const lucide_react_1 = require("lucide-react");
const utils_1 = require("./utils");
const button_1 = require("./button");
const ToastProvider = ToastPrimitives.Provider;
exports.ToastProvider = ToastProvider;
const ToastViewport = React.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)(ToastPrimitives.Viewport, { ref: ref, className: (0, utils_1.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", className), ...props })));
exports.ToastViewport = ToastViewport;
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
const toastVariants = (0, class_variance_authority_1.cva)("group pointer-events-auto relative flex w-full items-center justify-between gap-3 overflow-hidden rounded-[var(--radius-comic)] border-[3px] border-border p-4 shadow-[var(--shadow-comic)] transition-all active:translate-x-[4px] active:translate-y-[4px] active:shadow-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-80 data-[state=open]:fade-in-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] sm:data-[state=open]:slide-in-from-bottom-full comic-toast", {
    variants: {
        variant: {
            default: "bg-white text-black",
            success: "bg-green-400 text-black",
            error: "bg-red-400 text-black",
            warning: "bg-yellow-400 text-black",
            info: "bg-blue-400 text-white",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
const Toast = React.forwardRef(({ className, variant = "default", ...props }, ref) => ((0, jsx_runtime_1.jsx)(ToastPrimitives.Root, { ref: ref, "data-variant": variant, className: (0, utils_1.cn)(toastVariants({ variant }), className), ...props })));
exports.Toast = Toast;
Toast.displayName = ToastPrimitives.Root.displayName;
const ToastAction = React.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)(ToastPrimitives.Action, { ref: ref, className: (0, utils_1.cn)((0, button_1.buttonVariants)({ variant: "outline", size: "sm" }), "h-8 min-w-20 px-3 text-xs font-black uppercase tracking-wider shadow-[var(--shadow-comic-sm)]", "group-data-[variant=success]:border-black group-data-[variant=success]:bg-black group-data-[variant=success]:text-white group-data-[variant=success]:hover:bg-black/90 group-data-[variant=success]:hover:text-white group-data-[variant=success]:focus:text-white", "group-data-[variant=error]:bg-black group-data-[variant=error]:text-white group-data-[variant=error]:hover:bg-black/90", "group-data-[variant=warning]:bg-black group-data-[variant=warning]:text-white group-data-[variant=warning]:hover:bg-black/90", "group-data-[variant=info]:bg-white group-data-[variant=info]:text-black group-data-[variant=info]:hover:bg-white/90", className), ...props })));
exports.ToastAction = ToastAction;
ToastAction.displayName = ToastPrimitives.Action.displayName;
const ToastClose = React.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsxs)(ToastPrimitives.Close, { ref: ref, className: (0, utils_1.cn)("absolute right-2 top-2 rounded-[var(--radius-comic)] border-[2px] border-black p-1 text-black opacity-100 hover:bg-black/10 focus:opacity-100 focus:outline-none active:translate-x-[2px] active:translate-y-[2px] transition-transform", className), "toast-close": "", ...props, children: [(0, jsx_runtime_1.jsx)(lucide_react_1.X, { className: "h-4 w-4 stroke-[3px]" }), (0, jsx_runtime_1.jsx)("span", { className: "sr-only", children: "Close" })] })));
exports.ToastClose = ToastClose;
ToastClose.displayName = ToastPrimitives.Close.displayName;
const ToastTitle = React.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)(ToastPrimitives.Title, { ref: ref, className: (0, utils_1.cn)("text-sm font-black uppercase tracking-wider", className), ...props })));
exports.ToastTitle = ToastTitle;
ToastTitle.displayName = ToastPrimitives.Title.displayName;
const ToastDescription = React.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)(ToastPrimitives.Description, { ref: ref, className: (0, utils_1.cn)("text-sm font-bold opacity-90", className), ...props })));
exports.ToastDescription = ToastDescription;
ToastDescription.displayName = ToastPrimitives.Description.displayName;
