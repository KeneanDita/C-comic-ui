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
exports.TableCaption = exports.TableCell = exports.TableRow = exports.TableHead = exports.TableFooter = exports.TableBody = exports.TableHeader = exports.Table = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const utils_1 = require("./utils");
const Table = React.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)("div", { className: "w-full overflow-auto rounded-[var(--radius-comic)] border-[var(--border-comic)] border-border bg-white dark:bg-card shadow-[var(--shadow-comic)] mt-2 mb-4", children: (0, jsx_runtime_1.jsx)("table", { ref: ref, className: (0, utils_1.cn)("w-full caption-bottom text-sm font-sans", className), ...props }) })));
exports.Table = Table;
Table.displayName = "Table";
const TableHeader = React.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)("thead", { ref: ref, className: (0, utils_1.cn)("bg-muted/50 border-b-[var(--border-comic)] border-border text-black dark:text-foreground", className), ...props })));
exports.TableHeader = TableHeader;
TableHeader.displayName = "TableHeader";
const TableBody = React.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)("tbody", { ref: ref, className: (0, utils_1.cn)("[&_tr:last-child]:border-0", className), ...props })));
exports.TableBody = TableBody;
TableBody.displayName = "TableBody";
const TableFooter = React.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)("tfoot", { ref: ref, className: (0, utils_1.cn)("bg-primary text-primary-foreground font-black border-t-[var(--border-comic)] border-border", className), ...props })));
exports.TableFooter = TableFooter;
TableFooter.displayName = "TableFooter";
const TableRow = React.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)("tr", { ref: ref, className: (0, utils_1.cn)("border-b-[var(--border-comic)] border-border transition-colors hover:bg-muted/30 data-[state=selected]:bg-muted", className), ...props })));
exports.TableRow = TableRow;
TableRow.displayName = "TableRow";
const TableHead = React.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)("th", { ref: ref, className: (0, utils_1.cn)("h-12 px-4 text-left align-middle font-black uppercase tracking-wider text-muted-foreground [&:has([role=checkbox])]:pr-0", className), ...props })));
exports.TableHead = TableHead;
TableHead.displayName = "TableHead";
const TableCell = React.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)("td", { ref: ref, className: (0, utils_1.cn)("p-4 align-middle font-bold [&:has([role=checkbox])]:pr-0", className), ...props })));
exports.TableCell = TableCell;
TableCell.displayName = "TableCell";
const TableCaption = React.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)("caption", { ref: ref, className: (0, utils_1.cn)("mt-4 text-sm font-bold text-muted-foreground px-4", className), ...props })));
exports.TableCaption = TableCaption;
TableCaption.displayName = "TableCaption";
