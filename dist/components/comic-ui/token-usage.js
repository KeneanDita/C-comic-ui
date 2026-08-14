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
exports.TokenUsage = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const utils_1 = require("./utils");
const progress_1 = require("@/components/comic-ui/progress");
const TokenUsage = React.forwardRef(({ className, promptTokens, responseTokens, maxTokens, title = "Token Usage", subtitle = "Current Session", ...props }, ref) => {
    const total = promptTokens + responseTokens;
    const percentage = Math.min(100, Math.round((total / maxTokens) * 100));
    return ((0, jsx_runtime_1.jsxs)("div", { ref: ref, className: (0, utils_1.cn)("w-full max-w-sm bg-white dark:bg-card border-[3px] border-black dark:border-border rounded-[var(--radius-comic)] shadow-[var(--shadow-comic-lg)] p-6 flex flex-col gap-4", className), ...props, children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between items-end", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h4", { className: "font-black text-xl uppercase tracking-tight", children: title }), (0, jsx_runtime_1.jsx)("p", { className: "text-xs font-bold text-gray-500", children: subtitle })] }), (0, jsx_runtime_1.jsxs)("div", { className: "text-right", children: [(0, jsx_runtime_1.jsxs)("span", { className: "font-black text-2xl", children: [(total / 1000).toFixed(1), "k"] }), (0, jsx_runtime_1.jsxs)("span", { className: "text-sm font-bold text-gray-500", children: ["/", (maxTokens / 1000).toFixed(1), "k"] })] })] }), (0, jsx_runtime_1.jsx)(progress_1.Progress, { value: percentage, className: "h-4 border-[2px] border-black dark:border-border bg-gray-100" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex gap-4 text-xs font-bold mt-2", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-2", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-3 h-3 rounded-full bg-blue-500 border border-black" }), "Prompt: ", (promptTokens / 1000).toFixed(1), "k"] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-2", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-3 h-3 rounded-full bg-yellow-400 border border-black" }), "Response: ", (responseTokens / 1000).toFixed(1), "k"] })] })] }));
});
exports.TokenUsage = TokenUsage;
TokenUsage.displayName = "TokenUsage";
