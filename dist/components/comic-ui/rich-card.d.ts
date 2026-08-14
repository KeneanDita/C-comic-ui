import * as React from "react";
export interface RichCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
    imageSrc?: string;
    badgeText?: string;
    badgeIcon?: React.ReactNode;
    icon?: React.ReactNode;
    title: string;
    description: string;
    actionText?: string;
    onAction?: () => void;
}
declare const RichCard: React.ForwardRefExoticComponent<RichCardProps & React.RefAttributes<HTMLDivElement>>;
export { RichCard };
