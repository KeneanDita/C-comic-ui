import * as React from "react";
export interface ChartContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    config: Record<string, {
        label: string;
        color: string;
    }>;
}
declare const ChartContainer: React.ForwardRefExoticComponent<ChartContainerProps & React.RefAttributes<HTMLDivElement>>;
declare const ChartTooltipContent: React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<HTMLDivElement>>;
export { ChartContainer, ChartTooltipContent };
