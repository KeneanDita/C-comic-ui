"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.badgeVariants = void 0;
exports.Badge = Badge;
const jsx_runtime_1 = require("react/jsx-runtime");
const class_variance_authority_1 = require("class-variance-authority");
const utils_1 = require("./utils");
const badgeVariants = (0, class_variance_authority_1.cva)("inline-flex items-center rounded-[var(--radius-comic)] border-[var(--border-comic)] border-border px-2.5 py-0.5 text-xs font-black uppercase tracking-wider transition-colors shadow-[var(--shadow-comic-sm)] focus:outline-none focus:ring-4 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/80",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/80",
            outline: "text-foreground bg-background hover:bg-accent hover:text-accent-foreground",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
exports.badgeVariants = badgeVariants;
function Badge({ className, variant, ...props }) {
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)(badgeVariants({ variant }), className), ...props }));
}
