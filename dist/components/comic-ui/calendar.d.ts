import * as React from "react";
export type CalendarProps = React.HTMLAttributes<HTMLDivElement> & {
    selected?: Date;
    onSelect?: (date: Date) => void;
    month?: Date;
    onMonthChange?: (month: Date) => void;
};
declare const Calendar: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    selected?: Date;
    onSelect?: (date: Date) => void;
    month?: Date;
    onMonthChange?: (month: Date) => void;
} & React.RefAttributes<HTMLDivElement>>;
export { Calendar };
