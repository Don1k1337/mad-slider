import {useRgbToHex} from '../../use/useRgbToHex';

describe('rgbToHex utility function test', () => {
    it('should convert to hex representation correctly', () => {
        const rgb = 'rgb(0, 0, 0)'
        const expectedHex = '#000000'
        const result = useRgbToHex(rgb)
        expect(result).toEqual(expectedHex)
    })

    it('should return an empty string for invalid input value', () => {
        const rgb = 'data is invalid'
        const expectedHex = ''
        const result = useRgbToHex(rgb)
        expect(result).toEqual(expectedHex)
    })
})