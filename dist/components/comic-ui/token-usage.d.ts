import * as React from "react";
export interface TokenUsageProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
    promptTokens: number;
    responseTokens: number;
    maxTokens: number;
    title?: string;
    subtitle?: string;
}
declare const TokenUsage: React.ForwardRefExoticComponent<TokenUsageProps & React.RefAttributes<HTMLDivElement>>;
export { TokenUsage };
