import {Slider} from '../../slider/Slider';
import {SliderOptions} from '../../types/interfaces';

describe('Slider instance', () => {
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
            ],
        };

        const slider = new Slider(options);
        expect(slider).toBeInstanceOf(Slider)
    });
})