"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypographyH1 = TypographyH1;
exports.TypographyH2 = TypographyH2;
exports.TypographyH3 = TypographyH3;
exports.TypographyP = TypographyP;
exports.TypographyBlockquote = TypographyBlockquote;
const jsx_runtime_1 = require("react/jsx-runtime");
const utils_1 = require("./utils");
function TypographyH1({ className, ...props }) {
    return ((0, jsx_runtime_1.jsx)("h1", { className: (0, utils_1.cn)("scroll-m-20 text-4xl font-black tracking-tight lg:text-5xl uppercase", className), ...props }));
}
function TypographyH2({ className, ...props }) {
    return ((0, jsx_runtime_1.jsx)("h2", { className: (0, utils_1.cn)("scroll-m-20 border-b-[3px] border-border pb-2 text-3xl font-black tracking-tight first:mt-0 uppercase", className), ...props }));
}
function TypographyH3({ className, ...props }) {
    return ((0, jsx_runtime_1.jsx)("h3", { className: (0, utils_1.cn)("scroll-m-20 text-2xl font-bold tracking-tight uppercase", className), ...props }));
}
function TypographyP({ className, ...props }) {
    return ((0, jsx_runtime_1.jsx)("p", { className: (0, utils_1.cn)("leading-7 [&:not(:first-child)]:mt-6 font-semibold", className), ...props }));
}
function TypographyBlockquote({ className, ...props }) {
    return ((0, jsx_runtime_1.jsx)("blockquote", { className: (0, utils_1.cn)("mt-6 border-l-[3px] border-border pl-6 italic font-semibold text-muted-foreground", className), ...props }));
}
