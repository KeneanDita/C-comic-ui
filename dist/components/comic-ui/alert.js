"use strict";
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
exports.AlertDescription = exports.AlertTitle = exports.Alert = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const class_variance_authority_1 = require("class-variance-authority");
const utils_1 = require("./utils");
const alertVariants = (0, class_variance_authority_1.cva)("relative w-full rounded-[var(--radius-comic)] border-[var(--border-comic)] border-border px-4 py-3 text-sm shadow-[var(--shadow-comic)] bg-background [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-8", {
    variants: {
        variant: {
            default: "bg-background text-foreground",
            destructive: "bg-destructive text-destructive-foreground border-border shadow-[var(--shadow-comic)] [&>svg]:text-current",
            warning: "bg-primary text-primary-foreground border-border shadow-[var(--shadow-comic)] [&>svg]:text-current",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
const Alert = React.forwardRef(({ className, variant, ...props }, ref) => ((0, jsx_runtime_1.jsx)("div", { ref: ref, role: "alert", className: (0, utils_1.cn)(alertVariants({ variant }), className), ...props })));
exports.Alert = Alert;
Alert.displayName = "Alert";
const AlertTitle = React.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)("h5", { ref: ref, className: (0, utils_1.cn)("mb-1 font-black uppercase tracking-wider leading-none tracking-tight", className), ...props })));
exports.AlertTitle = AlertTitle;
AlertTitle.displayName = "AlertTitle";
const AlertDescription = React.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)("div", { ref: ref, className: (0, utils_1.cn)("text-sm font-bold opacity-90 [&_p]:leading-relaxed", className), ...props })));
exports.AlertDescription = AlertDescription;
AlertDescription.displayName = "AlertDescription";
