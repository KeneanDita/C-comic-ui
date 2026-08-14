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
exports.Calendar = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const lucide_react_1 = require("lucide-react");
const utils_1 = require("./utils");
const Calendar = React.forwardRef(({ className, selected, onSelect, month: monthProp, onMonthChange, ...props }, ref) => {
    const [currentMonth, setCurrentMonth] = React.useState(monthProp || new Date());
    // Update internal state if controlled prop changes
    React.useEffect(() => {
        if (monthProp)
            setCurrentMonth(monthProp);
    }, [monthProp]);
    const handleMonthChange = (newMonth) => {
        setCurrentMonth(newMonth);
        onMonthChange === null || onMonthChange === void 0 ? void 0 : onMonthChange(newMonth);
    };
    const nextMonth = () => {
        handleMonthChange(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
    };
    const prevMonth = () => {
        handleMonthChange(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
    };
    const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
        days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
        days.push(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i));
    }
    const isSameDay = (d1, d2) => {
        if (!d1 || !d2)
            return false;
        return d1.getDate() === d2.getDate() &&
            d1.getMonth() === d2.getMonth() &&
            d1.getFullYear() === d2.getFullYear();
    };
    const monthYearString = currentMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" });
    const dayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    return ((0, jsx_runtime_1.jsxs)("div", { ref: ref, className: (0, utils_1.cn)("p-4 bg-white dark:bg-card border-[3px] border-black dark:border-border rounded-[var(--radius-comic)] shadow-[var(--shadow-comic)] inline-block select-none", className), ...props, children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between items-center mb-4", children: [(0, jsx_runtime_1.jsx)("button", { type: "button", onClick: prevMonth, className: "h-8 w-8 inline-flex justify-center items-center rounded-full bg-white dark:bg-card border-[2px] border-black dark:border-border shadow-[var(--shadow-comic-sm)] hover:-translate-y-[2px] transition-transform active:translate-y-0 active:shadow-none", children: (0, jsx_runtime_1.jsx)(lucide_react_1.ChevronLeft, { className: "h-4 w-4 stroke-[3px]" }) }), (0, jsx_runtime_1.jsx)("div", { className: "font-black uppercase tracking-wider text-sm", children: monthYearString }), (0, jsx_runtime_1.jsx)("button", { type: "button", onClick: nextMonth, className: "h-8 w-8 inline-flex justify-center items-center rounded-full bg-white dark:bg-card border-[2px] border-black dark:border-border shadow-[var(--shadow-comic-sm)] hover:-translate-y-[2px] transition-transform active:translate-y-0 active:shadow-none", children: (0, jsx_runtime_1.jsx)(lucide_react_1.ChevronRight, { className: "h-4 w-4 stroke-[3px]" }) })] }), (0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-7 gap-1 text-center mb-2", children: dayNames.map(day => ((0, jsx_runtime_1.jsx)("div", { className: "text-[10px] font-black uppercase text-muted-foreground", children: day }, day))) }), (0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-7 gap-1", children: days.map((date, i) => {
                    if (!date)
                        return (0, jsx_runtime_1.jsx)("div", { className: "h-8 w-8" }, `empty-${i}`);
                    const isSelected = isSameDay(date, selected);
                    const isToday = isSameDay(date, new Date());
                    return ((0, jsx_runtime_1.jsx)("button", { type: "button", onClick: () => onSelect === null || onSelect === void 0 ? void 0 : onSelect(date), className: (0, utils_1.cn)("h-8 w-8 inline-flex justify-center items-center rounded-full text-sm font-bold border-[2px] transition-all", isSelected
                            ? "bg-primary text-primary-foreground border-black shadow-[var(--shadow-comic-sm)] scale-110 font-black z-10"
                            : "bg-transparent border-transparent hover:border-black dark:hover:border-border hover:bg-secondary", isToday && !isSelected && "text-blue-600 dark:text-blue-400 font-black underline underline-offset-2"), children: date.getDate() }, date.toISOString()));
                }) })] }));
});
exports.Calendar = Calendar;
Calendar.displayName = "Calendar";
