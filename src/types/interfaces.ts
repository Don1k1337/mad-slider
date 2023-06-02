export interface Slide {
    color: string;
    text: string;
}

export interface SliderOptions {
    delay: number;
    root: string;
    width?: number;
    height?: number;
    slides: Slide[];
}
