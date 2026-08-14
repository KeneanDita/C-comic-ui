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
exports.TimelineItem = exports.Timeline = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const utils_1 = require("./utils");
const TimelineItem = React.forwardRef(({ className, icon, iconBgColor = "bg-zinc-200", title, time, children, isLast, isActive, ...props }, ref) => {
    return ((0, jsx_runtime_1.jsxs)("div", { ref: ref, className: (0, utils_1.cn)("flex gap-4 relative z-10", className), ...props, children: [(0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)("w-8 h-8 rounded-full border-[3px] border-black dark:border-border flex items-center justify-center shrink-0 shadow-[var(--shadow-comic-sm)]", iconBgColor, isActive && "animate-pulse"), children: icon }), (0, jsx_runtime_1.jsxs)("div", { className: "pb-6", children: [(0, jsx_runtime_1.jsx)("div", { className: "font-black text-sm uppercase", children: title }), (0, jsx_runtime_1.jsx)("div", { className: "text-xs font-bold text-gray-500", children: time }), children && ((0, jsx_runtime_1.jsx)("div", { className: "mt-2 text-sm font-bold bg-blue-50 dark:bg-blue-950/30 p-2 rounded-[var(--radius-comic)] border-[2px] border-black dark:border-border", children: children }))] })] }));
});
exports.TimelineItem = TimelineItem;
TimelineItem.displayName = "TimelineItem";
const Timeline = React.forwardRef(({ className, title, icon, children, ...props }, ref) => {
    return ((0, jsx_runtime_1.jsxs)("div", { ref: ref, className: (0, utils_1.cn)("w-full max-w-md bg-white dark:bg-card border-[3px] border-black dark:border-border rounded-[var(--radius-comic)] shadow-[var(--shadow-comic)] p-6", className), ...props, children: [(title || icon) && ((0, jsx_runtime_1.jsxs)("h4", { className: "font-black text-2xl uppercase tracking-tight mb-6 flex items-center gap-2", children: [icon, " ", title] })), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col relative", children: [(0, jsx_runtime_1.jsx)("div", { className: "absolute left-[15px] top-4 bottom-4 w-[3px] bg-black dark:bg-border" }), children] })] }));
});
exports.Timeline = Timeline;
Timeline.displayName = "Timeline";
