import {Slide, SliderOptions} from '../../types/interfaces';

describe('Slide interface', () => {
    test('should have color and text properties', () => {
        const slide: Slide = {
            color: '#c62828',
            text: 'RED',
        };

        expect(slide.color).toBe('#c62828');
        expect(slide.text).toBe('RED');
    });
});

describe('SliderOptions interface', () => {
    test('should have delay, root, and slides properties', () => {
        const options: SliderOptions = {
            delay: 3000,
            root: '#slider',
            slides: [
                {color: '#c62828', text: 'RED'},
                {color: '#ad1457', text: 'PINK'},
            ],
        };

        expect(options.delay).toBe(3000);
        expect(options.root).toBe('#slider');
        expect(options.slides).toHaveLength(2);
        expect(options.slides[0].color).toBe('#c62828');
        expect(options.slides[0].text).toBe('RED');
        expect(options.slides[1].color).toBe('#ad1457');
        expect(options.slides[1].text).toBe('PINK');
    });

    test('should allow width and height properties to be optional', () => {
        const options: SliderOptions = {
            delay: 2500,
            root: '#slider',
            slides: [],
        };

        expect(options.width).toBeUndefined();
        expect(options.height).toBeUndefined();
    });
});