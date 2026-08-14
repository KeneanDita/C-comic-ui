"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Skeleton = Skeleton;
const jsx_runtime_1 = require("react/jsx-runtime");
const utils_1 = require("./utils");
function Skeleton({ className, ...props }) {
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)("animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite] rounded-[var(--radius-comic)] border-[3px] border-border border-dashed bg-muted shadow-[var(--shadow-comic-sm)]", className), ...props }));
}
