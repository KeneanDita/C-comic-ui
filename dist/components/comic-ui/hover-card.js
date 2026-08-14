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
exports.HoverCardContent = exports.HoverCardTrigger = exports.HoverCard = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const HoverCardPrimitive = __importStar(require("@radix-ui/react-hover-card"));
const utils_1 = require("./utils");
const HoverCard = HoverCardPrimitive.Root;
exports.HoverCard = HoverCard;
const HoverCardTrigger = HoverCardPrimitive.Trigger;
exports.HoverCardTrigger = HoverCardTrigger;
const HoverCardContent = React.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => ((0, jsx_runtime_1.jsx)(HoverCardPrimitive.Content, { ref: ref, align: align, sideOffset: sideOffset, className: (0, utils_1.cn)("z-50 w-64 rounded-[var(--radius-comic)] border-[var(--border-comic)] border-black bg-popover p-4 text-popover-foreground shadow-[var(--shadow-comic)] outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className), ...props })));
exports.HoverCardContent = HoverCardContent;
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;
