import { SliderOptions } from "../types/interfaces";

export class Slider {
    private readonly sliderElement: HTMLElement;
    private readonly slideElements: HTMLElement[];
    private intervalId: NodeJS.Timeout;
    private currentIndex: number;
    private slideWidth: number;

    constructor(options: SliderOptions) {
        this.intervalId = setTimeout(() => {}, 0);
        this.sliderElement = document.createElement("div");
        this.sliderElement.className = "slider";

        const slidesArray = Object.entries(options.slides).map(([key, value]) => ({
            key,
            ...value,
        }));

        this.slideElements = slidesArray.map((slide) => {
            const slideElement = document.createElement("div");
            slideElement.className = "slide";
            slideElement.textContent = slide.text;
            slideElement.style.backgroundColor = slide.color;
            this.sliderElement.appendChild(slideElement);
            return slideElement;
        });

        document.getElementById("app")!.appendChild(this.sliderElement);
        this.sliderElement.style.width = `${options.width}px`;
        this.sliderElement.style.height = `${options.height}px`;

        this.currentIndex = 0;
        this.slideWidth = this.sliderElement.offsetWidth;
        this.init(options.delay);
    }

    private init(delay: number): void {
        this.intervalId = setInterval(() => this.slide(), delay);
    }

    public stop(): void {
        clearInterval(this.intervalId);
    }

    private slide(): void {
        const nextIndex = (this.currentIndex + 1) % this.slideElements.length;
        const nextSlide = this.slideElements[nextIndex];

        this.slideElements.forEach((slide) => {
            if (slide === nextSlide) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });

        // check the end of slides, if so -> stop sliding
        if (this.currentIndex === this.slideElements.length - 1) {
            this.stop();
        }

        this.currentIndex = nextIndex;
    }
}
