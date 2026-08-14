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
exports.DrawerDescription = exports.DrawerTitle = exports.DrawerFooter = exports.DrawerHeader = exports.DrawerContent = exports.DrawerClose = exports.DrawerTrigger = exports.DrawerOverlay = exports.DrawerPortal = exports.Drawer = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const vaul_1 = require("vaul");
const utils_1 = require("./utils");
const Drawer = ({ shouldScaleBackground = true, ...props }) => ((0, jsx_runtime_1.jsx)(vaul_1.Drawer.Root, { shouldScaleBackground: shouldScaleBackground, ...props }));
exports.Drawer = Drawer;
Drawer.displayName = "Drawer";
const DrawerTrigger = vaul_1.Drawer.Trigger;
exports.DrawerTrigger = DrawerTrigger;
const DrawerPortal = vaul_1.Drawer.Portal;
exports.DrawerPortal = DrawerPortal;
const DrawerClose = vaul_1.Drawer.Close;
exports.DrawerClose = DrawerClose;
const DrawerOverlay = React.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)(vaul_1.Drawer.Overlay, { ref: ref, className: (0, utils_1.cn)("fixed inset-0 z-50 bg-black/80", className), ...props })));
exports.DrawerOverlay = DrawerOverlay;
DrawerOverlay.displayName = vaul_1.Drawer.Overlay.displayName;
const DrawerContent = React.forwardRef(({ className, children, ...props }, ref) => ((0, jsx_runtime_1.jsxs)(DrawerPortal, { children: [(0, jsx_runtime_1.jsx)(DrawerOverlay, {}), (0, jsx_runtime_1.jsxs)(vaul_1.Drawer.Content, { ref: ref, className: (0, utils_1.cn)("fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[var(--radius-comic-lg)] border-[4px] border-border bg-background shadow-[var(--shadow-comic-lg)]", className), ...props, children: [(0, jsx_runtime_1.jsx)("div", { className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-border" }), children] })] })));
exports.DrawerContent = DrawerContent;
DrawerContent.displayName = "DrawerContent";
const DrawerHeader = ({ className, ...props }) => ((0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)("grid gap-1.5 p-4 text-center sm:text-left border-b-[3px] border-border", className), ...props }));
exports.DrawerHeader = DrawerHeader;
DrawerHeader.displayName = "DrawerHeader";
const DrawerFooter = ({ className, ...props }) => ((0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)("mt-auto flex flex-col gap-2 p-4 border-t-[3px] border-border", className), ...props }));
exports.DrawerFooter = DrawerFooter;
DrawerFooter.displayName = "DrawerFooter";
const DrawerTitle = React.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)(vaul_1.Drawer.Title, { ref: ref, className: (0, utils_1.cn)("text-2xl font-bold uppercase leading-none tracking-tight", className), ...props })));
exports.DrawerTitle = DrawerTitle;
DrawerTitle.displayName = vaul_1.Drawer.Title.displayName;
const DrawerDescription = React.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)(vaul_1.Drawer.Description, { ref: ref, className: (0, utils_1.cn)("text-sm text-muted-foreground font-semibold", className), ...props })));
exports.DrawerDescription = DrawerDescription;
DrawerDescription.displayName = vaul_1.Drawer.Description.displayName;
