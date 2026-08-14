import * as React from "react";
export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
declare const Carousel: React.ForwardRefExoticComponent<CarouselProps & React.RefAttributes<HTMLDivElement>>;
export interface CarouselContentProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
declare const CarouselContent: React.ForwardRefExoticComponent<CarouselContentProps & React.RefAttributes<HTMLDivElement>>;
export interface CarouselItemProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
declare const CarouselItem: React.ForwardRefExoticComponent<CarouselItemProps & React.RefAttributes<HTMLDivElement>>;
export interface CarouselPreviousProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    containerRef?: React.RefObject<HTMLDivElement | null>;
}
declare const CarouselPrevious: React.ForwardRefExoticComponent<CarouselPreviousProps & React.RefAttributes<HTMLButtonElement>>;
export interface CarouselNextProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    containerRef?: React.RefObject<HTMLDivElement | null>;
}
declare const CarouselNext: React.ForwardRefExoticComponent<CarouselNextProps & React.RefAttributes<HTMLButtonElement>>;
export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext };
