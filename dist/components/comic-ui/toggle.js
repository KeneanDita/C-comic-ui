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
exports.toggleVariants = exports.Toggle = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const TogglePrimitive = __importStar(require("@radix-ui/react-toggle"));
const class_variance_authority_1 = require("class-variance-authority");
const utils_1 = require("./utils");
const toggleVariants = (0, class_variance_authority_1.cva)("inline-flex items-center justify-center rounded-[var(--radius-comic)] text-sm font-black uppercase tracking-wider transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-background hover:bg-muted hover:text-muted-foreground border-[var(--border-comic)] border-border bg-background shadow-[var(--shadow-comic)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[var(--shadow-comic-hover)] data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:translate-x-[4px] data-[state=on]:translate-y-[4px] data-[state=on]:shadow-[var(--shadow-comic-active)]", {
    variants: {
        variant: {
            default: "bg-transparent",
            outline: "border-[var(--border-comic)] border-input hover:bg-accent hover:text-accent-foreground",
        },
        size: {
            default: "h-10 px-3",
            sm: "h-9 px-2.5",
            lg: "h-11 px-5 text-base",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});
exports.toggleVariants = toggleVariants;
const Toggle = React.forwardRef(({ className, variant, size, ...props }, ref) => ((0, jsx_runtime_1.jsx)(TogglePrimitive.Root, { ref: ref, className: (0, utils_1.cn)(toggleVariants({ variant, size, className })), ...props })));
exports.Toggle = Toggle;
Toggle.displayName = TogglePrimitive.Root.displayName;
