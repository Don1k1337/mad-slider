import {SliderOptions} from '../types/interfaces';

export class Slider {
    readonly sliderElement: HTMLElement;
    readonly slideElements: HTMLElement[];
    intervalId: NodeJS.Timeout;
    currentIndex: number;
    slideWidth: number;

    constructor(options: SliderOptions) {
        // Additional check in case there is no provided options
        if (typeof options === 'undefined') {
            throw new Error('An argument for options was not provided.');
        }

        const appElement = document.getElementById('app');
        if (!appElement) {
            throw new Error(`Element with ID '${appElement}' not found.`);
        }

        this.intervalId = setTimeout(() => {
        }, 0);
        this.sliderElement = document.createElement('div');
        this.sliderElement.className = 'slider';

        const slidesArray = Object.entries(options.slides).map(([key, value]) => ({
            key,
            ...value,
        })).reverse();

        this.slideElements = slidesArray.map((slide) => {
            const slideElement = document.createElement('div');
            slideElement.className = 'slide';
            slideElement.textContent = slide.text;
            slideElement.style.backgroundColor = slide.color;
            this.sliderElement.appendChild(slideElement);
            return slideElement;
        }).reverse();

        appElement.appendChild(this.sliderElement);

        // Setting width if provided
        options.width && (this.sliderElement.style.width = `${options.width}px`);

        // Setting height if provided
        options.height && (this.sliderElement.style.height = `${options.height}px`);

        this.currentIndex = 0;
        this.slideWidth = this.sliderElement.offsetWidth;
        this.init(options.delay);
    }

    private init(delay: number): void {
        this.intervalId = setInterval(() => this.slide(), delay);
    }

    public stop = () => {
        clearInterval(this.intervalId);
        this.intervalId = null
    };

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

        // Checking to reach the end of slides
        if (nextIndex === this.slideElements.length - 1) {
            this.stop();
        }

        this.currentIndex = nextIndex;
    }
}