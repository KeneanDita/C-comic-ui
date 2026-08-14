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
exports.Checkbox = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const CheckboxPrimitive = __importStar(require("@radix-ui/react-checkbox"));
const lucide_react_1 = require("lucide-react");
const utils_1 = require("./utils");
const Checkbox = React.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)(CheckboxPrimitive.Root, { ref: ref, className: (0, utils_1.cn)("peer h-5 w-5 shrink-0 rounded-[2px] border-[var(--border-comic)] border-border shadow-[var(--shadow-comic-sm)] ring-offset-background hover:scale-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground transition-all duration-200 active:translate-y-[2px] active:translate-x-[2px] active:shadow-none bg-white dark:bg-card", className), ...props, children: (0, jsx_runtime_1.jsx)(CheckboxPrimitive.Indicator, { className: (0, utils_1.cn)("flex items-center justify-center text-current"), children: (0, jsx_runtime_1.jsx)(lucide_react_1.Check, { className: "h-4 w-4 stroke-[4px]" }) }) })));
exports.Checkbox = Checkbox;
Checkbox.displayName = CheckboxPrimitive.Root.displayName;
