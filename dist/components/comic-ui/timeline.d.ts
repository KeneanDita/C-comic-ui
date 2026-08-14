import * as React from "react";
export interface TimelineItemProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
    icon?: React.ReactNode;
    iconBgColor?: string;
    title: React.ReactNode;
    time: React.ReactNode;
    children?: React.ReactNode;
    isLast?: boolean;
    isActive?: boolean;
}
declare const TimelineItem: React.ForwardRefExoticComponent<TimelineItemProps & React.RefAttributes<HTMLDivElement>>;
export interface TimelineProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
    title?: React.ReactNode;
    icon?: React.ReactNode;
}
declare const Timeline: React.ForwardRefExoticComponent<TimelineProps & React.RefAttributes<HTMLDivElement>>;
export { Timeline, TimelineItem };
