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
exports.AccordionContent = exports.AccordionTrigger = exports.AccordionItem = exports.Accordion = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const AccordionPrimitive = __importStar(require("@radix-ui/react-accordion"));
const lucide_react_1 = require("lucide-react");
const utils_1 = require("./utils");
const Accordion = AccordionPrimitive.Root;
exports.Accordion = Accordion;
const AccordionItem = React.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)(AccordionPrimitive.Item, { ref: ref, className: (0, utils_1.cn)("border-b-[3px] border-border last:border-b-0", className), ...props })));
exports.AccordionItem = AccordionItem;
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => ((0, jsx_runtime_1.jsx)(AccordionPrimitive.Header, { className: "flex", children: (0, jsx_runtime_1.jsxs)(AccordionPrimitive.Trigger, { ref: ref, className: (0, utils_1.cn)("flex flex-1 items-center justify-between py-4 px-2 font-bold uppercase transition-all hover:bg-muted/50 [&[data-state=open]>svg]:rotate-180", className), ...props, children: [children, (0, jsx_runtime_1.jsx)(lucide_react_1.ChevronDown, { className: "h-5 w-5 shrink-0 transition-transform duration-200" })] }) })));
exports.AccordionTrigger = AccordionTrigger;
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => ((0, jsx_runtime_1.jsx)(AccordionPrimitive.Content, { ref: ref, className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down", ...props, children: (0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)("pb-4 pt-0 px-2 font-medium leading-relaxed", className), children: children }) })));
exports.AccordionContent = AccordionContent;
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
