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
exports.buttonVariants = exports.Button = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const react_slot_1 = require("@radix-ui/react-slot");
const class_variance_authority_1 = require("class-variance-authority");
const utils_1 = require("./utils");
const buttonVariants = (0, class_variance_authority_1.cva)("inline-flex items-center justify-center whitespace-nowrap text-sm font-black uppercase tracking-wider transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-background", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground border-[var(--border-comic)] border-border rounded-[var(--radius-comic)] shadow-[var(--shadow-comic)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[var(--shadow-comic-hover)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-[var(--shadow-comic-active)]",
            destructive: "bg-destructive text-destructive-foreground border-[var(--border-comic)] border-border rounded-[var(--radius-comic)] shadow-[var(--shadow-comic)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[var(--shadow-comic-hover)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-[var(--shadow-comic-active)]",
            outline: "border-[var(--border-comic)] border-border bg-background hover:bg-secondary hover:text-secondary-foreground rounded-[var(--radius-comic)] shadow-[var(--shadow-comic)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[var(--shadow-comic-hover)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-[var(--shadow-comic-active)]",
            secondary: "bg-secondary text-secondary-foreground border-[var(--border-comic)] border-border rounded-[var(--radius-comic)] shadow-[var(--shadow-comic)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[var(--shadow-comic-hover)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-[var(--shadow-comic-active)]",
            ghost: "hover:bg-accent hover:text-accent-foreground rounded-[var(--radius-comic)]",
            link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8 text-base",
            icon: "h-10 w-10",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});
exports.buttonVariants = buttonVariants;
const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? react_slot_1.Slot : "button";
    return ((0, jsx_runtime_1.jsx)(Comp, { className: (0, utils_1.cn)(buttonVariants({ variant, size, className })), ref: ref, ...props }));
});
exports.Button = Button;
Button.displayName = "Button";
