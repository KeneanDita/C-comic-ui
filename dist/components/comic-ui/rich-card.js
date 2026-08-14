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
exports.RichCard = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const utils_1 = require("./utils");
const button_1 = require("@/components/comic-ui/button");
const RichCard = React.forwardRef(({ className, imageSrc, badgeText, badgeIcon, icon, title, description, actionText, onAction, ...props }, ref) => {
    return ((0, jsx_runtime_1.jsxs)("div", { ref: ref, className: (0, utils_1.cn)("w-full max-w-sm rounded-[var(--radius-comic)] border-[3px] border-black dark:border-border shadow-[var(--shadow-comic-lg)] overflow-hidden bg-white dark:bg-card group hover:-translate-y-1 transition-transform cursor-pointer", className), ...props, children: [(0, jsx_runtime_1.jsxs)("div", { className: "h-40 bg-zinc-200 relative border-b-[3px] border-black dark:border-border overflow-hidden", children: [imageSrc ? ((0, jsx_runtime_1.jsx)("img", { src: imageSrc, alt: title, className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" })) : ((0, jsx_runtime_1.jsx)("div", { className: "absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 opacity-80 group-hover:scale-110 transition-transform duration-500" })), badgeText && ((0, jsx_runtime_1.jsxs)("div", { className: "absolute top-3 right-3 bg-yellow-400 text-black font-black uppercase text-[10px] px-2 py-1 rounded-[var(--radius-comic)] border-[2px] border-black flex items-center gap-1 shadow-sm", children: [badgeIcon, " ", badgeText] }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "p-6 relative", children: [icon && ((0, jsx_runtime_1.jsx)("div", { className: "absolute -top-10 left-6 w-16 h-16 rounded-[var(--radius-comic)] bg-white dark:bg-card border-[3px] border-black shadow-[var(--shadow-comic-sm)] flex items-center justify-center overflow-hidden", children: icon })), (0, jsx_runtime_1.jsxs)("div", { className: (0, utils_1.cn)("mt-8", !icon && "mt-2"), children: [(0, jsx_runtime_1.jsx)("h3", { className: "font-black text-2xl uppercase tracking-tight leading-none mb-2", children: title }), (0, jsx_runtime_1.jsx)("p", { className: "text-sm font-bold text-gray-600 mb-6", children: description }), actionText && ((0, jsx_runtime_1.jsx)(button_1.Button, { onClick: onAction, className: "w-full font-black uppercase border-[3px] border-black shadow-[var(--shadow-comic-sm)] hover:bg-yellow-400 hover:text-black", children: actionText }))] })] })] }));
});
exports.RichCard = RichCard;
RichCard.displayName = "RichCard";
