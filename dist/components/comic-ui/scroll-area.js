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
exports.ScrollBar = exports.ScrollArea = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const ScrollAreaPrimitive = __importStar(require("@radix-ui/react-scroll-area"));
const utils_1 = require("./utils");
const ScrollArea = React.forwardRef(({ className, children, ...props }, ref) => ((0, jsx_runtime_1.jsxs)(ScrollAreaPrimitive.Root, { ref: ref, className: (0, utils_1.cn)("relative overflow-hidden border-[var(--border-comic)] border-black rounded-[var(--radius-comic)] shadow-[var(--shadow-comic)]", className), ...props, children: [(0, jsx_runtime_1.jsx)(ScrollAreaPrimitive.Viewport, { className: "h-full w-full rounded-[inherit]", children: children }), (0, jsx_runtime_1.jsx)(ScrollBar, {}), (0, jsx_runtime_1.jsx)(ScrollAreaPrimitive.Corner, {})] })));
exports.ScrollArea = ScrollArea;
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;
const ScrollBar = React.forwardRef(({ className, orientation = "vertical", ...props }, ref) => ((0, jsx_runtime_1.jsx)(ScrollAreaPrimitive.ScrollAreaScrollbar, { ref: ref, orientation: orientation, className: (0, utils_1.cn)("flex touch-none select-none transition-colors border-black", orientation === "vertical" &&
        "h-full w-4 border-l-[var(--border-comic)] p-[2px]", orientation === "horizontal" &&
        "h-4 flex-col border-t-[var(--border-comic)] p-[2px]", className), ...props, children: (0, jsx_runtime_1.jsx)(ScrollAreaPrimitive.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border border-2 border-black" }) })));
exports.ScrollBar = ScrollBar;
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;
