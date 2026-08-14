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
exports.CarouselNext = exports.CarouselPrevious = exports.CarouselItem = exports.CarouselContent = exports.Carousel = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const lucide_react_1 = require("lucide-react");
const utils_1 = require("./utils");
const Carousel = React.forwardRef(({ className, children, ...props }, ref) => {
    return ((0, jsx_runtime_1.jsx)("div", { ref: ref, className: (0, utils_1.cn)("relative group w-full", className), ...props, children: children }));
});
exports.Carousel = Carousel;
Carousel.displayName = "Carousel";
const CarouselContent = React.forwardRef(({ className, children, ...props }, ref) => {
    return ((0, jsx_runtime_1.jsx)("div", { className: "overflow-hidden w-full h-full rounded-[var(--radius-comic)] border-[3px] border-black dark:border-border shadow-[var(--shadow-comic)] bg-white dark:bg-card", children: (0, jsx_runtime_1.jsx)("div", { ref: ref, className: (0, utils_1.cn)("flex w-full overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar p-2 gap-4", className), style: { scrollbarWidth: 'none', msOverflowStyle: 'none' }, ...props, children: children }) }));
});
exports.CarouselContent = CarouselContent;
CarouselContent.displayName = "CarouselContent";
const CarouselItem = React.forwardRef(({ className, children, ...props }, ref) => {
    return ((0, jsx_runtime_1.jsx)("div", { ref: ref, className: (0, utils_1.cn)("min-w-0 shrink-0 grow-0 basis-full snap-center", className), ...props, children: children }));
});
exports.CarouselItem = CarouselItem;
CarouselItem.displayName = "CarouselItem";
const CarouselPrevious = React.forwardRef(({ className, containerRef, onClick, ...props }, ref) => {
    const handleScroll = (e) => {
        onClick === null || onClick === void 0 ? void 0 : onClick(e);
        if (containerRef === null || containerRef === void 0 ? void 0 : containerRef.current) {
            containerRef.current.scrollBy({ left: -containerRef.current.offsetWidth, behavior: 'smooth' });
        }
    };
    return ((0, jsx_runtime_1.jsxs)("button", { ref: ref, type: "button", onClick: handleScroll, className: (0, utils_1.cn)("absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 h-10 w-10 z-10 inline-flex items-center justify-center rounded-full bg-white dark:bg-card border-[3px] border-black dark:border-border shadow-[var(--shadow-comic-sm)] hover:-translate-y-[calc(50%+2px)] active:shadow-none active:-translate-y-1/2 transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0 focus-visible:opacity-100 outline-none", className), ...props, children: [(0, jsx_runtime_1.jsx)(lucide_react_1.ArrowLeft, { className: "h-5 w-5 stroke-[3px]" }), (0, jsx_runtime_1.jsx)("span", { className: "sr-only", children: "Previous slide" })] }));
});
exports.CarouselPrevious = CarouselPrevious;
CarouselPrevious.displayName = "CarouselPrevious";
const CarouselNext = React.forwardRef(({ className, containerRef, onClick, ...props }, ref) => {
    const handleScroll = (e) => {
        onClick === null || onClick === void 0 ? void 0 : onClick(e);
        if (containerRef === null || containerRef === void 0 ? void 0 : containerRef.current) {
            containerRef.current.scrollBy({ left: containerRef.current.offsetWidth, behavior: 'smooth' });
        }
    };
    return ((0, jsx_runtime_1.jsxs)("button", { ref: ref, type: "button", onClick: handleScroll, className: (0, utils_1.cn)("absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 h-10 w-10 z-10 inline-flex items-center justify-center rounded-full bg-white dark:bg-card border-[3px] border-black dark:border-border shadow-[var(--shadow-comic-sm)] hover:-translate-y-[calc(50%+2px)] active:shadow-none active:-translate-y-1/2 transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0 focus-visible:opacity-100 outline-none", className), ...props, children: [(0, jsx_runtime_1.jsx)(lucide_react_1.ArrowRight, { className: "h-5 w-5 stroke-[3px]" }), (0, jsx_runtime_1.jsx)("span", { className: "sr-only", children: "Next slide" })] }));
});
exports.CarouselNext = CarouselNext;
CarouselNext.displayName = "CarouselNext";
