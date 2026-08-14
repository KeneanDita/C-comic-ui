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
exports.RadioGroupItem = exports.RadioGroup = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const RadioGroupPrimitive = __importStar(require("@radix-ui/react-radio-group"));
const lucide_react_1 = require("lucide-react");
const utils_1 = require("./utils");
const RadioGroup = React.forwardRef(({ className, ...props }, ref) => {
    return ((0, jsx_runtime_1.jsx)(RadioGroupPrimitive.Root, { className: (0, utils_1.cn)("grid gap-2", className), ...props, ref: ref }));
});
exports.RadioGroup = RadioGroup;
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
const RadioGroupItem = React.forwardRef(({ className, ...props }, ref) => {
    return ((0, jsx_runtime_1.jsx)(RadioGroupPrimitive.Item, { ref: ref, className: (0, utils_1.cn)("aspect-square h-5 w-5 rounded-full border-[var(--border-comic)] border-black bg-background text-primary shadow-[var(--shadow-comic)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[var(--shadow-comic-hover)] focus:outline-none focus-visible:ring-4 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all", className), ...props, children: (0, jsx_runtime_1.jsx)(RadioGroupPrimitive.Indicator, { className: "flex items-center justify-center", children: (0, jsx_runtime_1.jsx)(lucide_react_1.Circle, { className: "h-2.5 w-2.5 fill-current text-current" }) }) }));
});
exports.RadioGroupItem = RadioGroupItem;
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;
