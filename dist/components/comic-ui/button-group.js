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
exports.ButtonGroup = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const utils_1 = require("./utils");
const ButtonGroup = React.forwardRef(({ className, ...props }, ref) => {
    return ((0, jsx_runtime_1.jsx)("div", { ref: ref, className: (0, utils_1.cn)("inline-flex -space-x-[3px] rounded-[var(--radius-comic)] shadow-[var(--shadow-comic)]", "[&>button]:rounded-none [&>button]:shadow-none [&>button]:border-[3px] [&>button]:border-border", "[&>button:first-child]:rounded-l-[var(--radius-comic)]", "[&>button:last-child]:rounded-r-[var(--radius-comic)]", "[&>button:active]:translate-x-0 [&>button:active]:translate-y-0", // override comic button translation because they share borders
        "active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all", // the whole group translates instead
        className), ...props }));
});
exports.ButtonGroup = ButtonGroup;
ButtonGroup.displayName = "ButtonGroup";
