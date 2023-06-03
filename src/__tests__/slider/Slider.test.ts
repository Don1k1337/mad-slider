import {Slider} from '../../slider/Slider';
import {rgbToHex} from '../../use/rgbToHex';
import {SliderOptions} from '../../types/interfaces';

describe('Slider logic', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Simple slider</title>
            </head>
            <body>
                <div class="app" id="app"></div>
            </body>
            </html>
        `;
    });
    it('should create a new Slider instance with the given options', () => {
        const options: SliderOptions = {
            delay: 2500,
            root: '#app',
            width: 750,
            height: 400,
            slides: [
                {
                    color: "#c62828",
                    text: "RED"
                },
                {
                    color: "#ad1457",
                    text: "PINK"
                },
                {
                    color: "#6a1b9a",
                    text: "PURPLE"
                },
                {
                    color: "#4527a0",
                    text: "DEEP_PURPLE"
                },
                {
                    color: "#283593",
                    text: "INDIGO"
                },
                {
                    color: "#1565c0",
                    text: "BLUE"
                },
                {
                    color: "#0277bd",
                    text: "LIGHT_BLUE"
                },
                {
                    color: "#00838f",
                    text: "CYAN"
                },
                {
                    color: "#00695c",
                    text: "TEAL"
                },
                {
                    color: "#2e7d32",
                    text: "GREEN"
                },
                {
                    color: "#558b2f",
                    text: "LIGHT_GREEN"
                },
                {
                    color: "#827717",
                    text: "LIME"
                },
                {
                    color: "#ef6c00",
                    text: "ORANGE"
                },
                {
                    color: "#d84315",
                    text: "DEEP_ORANGE"
                }
            ],
        };

        const slider = new Slider(options);

        expect(slider.sliderElement).toBeDefined();
        expect(slider.slideElements.length).toEqual(options.slides.length);

        for (let i = 0; i < slider.slideElements.length; i++) {
            const slideElement = slider.slideElements[i];
            const expectedColor = options.slides[i].color;
            const slideElementColor = rgbToHex(slideElement.style.backgroundColor || '');

            expect(slideElementColor).toEqual(expectedColor);
            expect(slideElement.textContent).toEqual(options.slides[i].text);
        }

        expect(slider.intervalId).toBeDefined();
        expect(slider.currentIndex).toEqual(0);
        expect(slider.slideWidth).toBeDefined();
    });

    it('should stop sliding when the stop method is called', () => {
        const options = {
            delay: 1000,
            root: '#app',
            slides: [
                {color: '#c62828', text: 'RED'},
                {color: '#ad1457', text: 'PINK'},
            ],
        };

        const slider = new Slider(options);
        expect(slider.intervalId).toBeDefined();

        slider.stop();
        expect(slider.intervalId).toBeNull();
    });

    it('should slide to the next slide after a delay', (done) => {
        const options = {
            delay: 1000,
            root: '#app',
            slides: [
                {color: '#c62828', text: 'RED'},
                {color: '#ad1457', text: 'PINK'},
            ],
        };

        const slider = new Slider(options);

        setTimeout(() => {
            expect(slider.slideElements[0].classList.contains('active')).toBe(false);
            expect(slider.slideElements[1].classList.contains('active')).toBe(true);
            expect(slider.currentIndex).toEqual(1);
            done();
        }, 1000);
    });

    it('should stop sliding when the last slide is reached', (done) => {
        const options = {
            delay: 1000,
            root: '#app',
            slides: [
                {color: '#c62828', text: 'RED'},
                {color: '#ad1457', text: 'PINK'},
            ],
        };

        const slider = new Slider(options);

        setTimeout(() => {
            expect(slider.slideElements[0].classList.contains('active')).toBe(false);
            expect(slider.slideElements[1].classList.contains('active')).toBe(true);
            expect(slider.currentIndex).toEqual(1);

            setTimeout(() => {
                expect(slider.intervalId).toBeNull();
                done();
            }, 1000);
        }, 1000);
    });

    it('should throw an error when options argument is not provided', () => {
        expect(() => {
            new Slider(undefined);
        }).toThrow('An argument for options was not provided.');
    });

    it('should create a slider without any slides when options.slides array is empty', () => {
        const options = {
            delay: 1000,
            root: '#app',
            slides: [],
        };

        const slider = new Slider(options);
        expect(slider.slideElements.length).toEqual(0);
    });
});