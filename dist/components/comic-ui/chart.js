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
exports.ChartTooltipContent = exports.ChartContainer = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const utils_1 = require("./utils");
const ChartContainer = React.forwardRef(({ className, config, children, ...props }, ref) => {
    // Generate CSS variables for the chart colors based on config
    const styleStr = Object.entries(config).map(([key, val]) => {
        return `--color-${key}: ${val.color};`;
    }).join(' ');
    return ((0, jsx_runtime_1.jsxs)("div", { ref: ref, className: (0, utils_1.cn)("w-full bg-white dark:bg-card border-[3px] border-black dark:border-border rounded-[var(--radius-comic)] shadow-[var(--shadow-comic)] p-4 relative font-bold", className), style: { ...props.style }, ...props, children: [(0, jsx_runtime_1.jsx)("style", { dangerouslySetInnerHTML: { __html: `[data-chart-container] { ${styleStr} }` } }), (0, jsx_runtime_1.jsx)("div", { "data-chart-container": true, className: "w-full h-full", children: children })] }));
});
exports.ChartContainer = ChartContainer;
ChartContainer.displayName = "ChartContainer";
const ChartTooltipContent = React.forwardRef(({ active, payload, label, hideLabel, className }, ref) => {
    if (!active || !(payload === null || payload === void 0 ? void 0 : payload.length)) {
        return null;
    }
    return ((0, jsx_runtime_1.jsxs)("div", { ref: ref, className: (0, utils_1.cn)("bg-white dark:bg-card border-[3px] border-black dark:border-border rounded-[var(--radius-comic)] shadow-[var(--shadow-comic-sm)] p-3", className), children: [!hideLabel && ((0, jsx_runtime_1.jsx)("div", { className: "font-black uppercase text-xs mb-2 border-b-[2px] border-border pb-1", children: label })), (0, jsx_runtime_1.jsx)("div", { className: "space-y-1", children: payload.map((item, index) => {
                    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-between gap-4 font-bold text-sm", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-2", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-3 h-3 rounded-full border-[2px] border-black dark:border-border", style: { backgroundColor: item.color || item.payload.fill } }), (0, jsx_runtime_1.jsx)("span", { className: "capitalize", children: item.name })] }), (0, jsx_runtime_1.jsx)("span", { className: "font-black", children: item.value })] }, `item-${index}`));
                }) })] }));
});
exports.ChartTooltipContent = ChartTooltipContent;
ChartTooltipContent.displayName = "ChartTooltipContent";
