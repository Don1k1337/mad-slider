export function useRgbToHex(rgb: string): string {
    // Get each RGB component
    const rgbComponents = rgb.match(/\d+/g);

    if (rgbComponents) {
        // Convert each component to hex
        const hexComponents = rgbComponents.map(component => {
            const hex = parseInt(component, 10).toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        });

        // Return the hex representation of a color
        return '#' + hexComponents.join('');
    }

    return '';
}