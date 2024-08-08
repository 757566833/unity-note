export function invertColor(color: string,o:number=0.3): string {
    // Helper function to convert hex to RGB
    function hexToRgb(hex: string): [number, number, number] {
        let bigint = parseInt(hex, 16);
        let r = (bigint >> 16) & 255;
        let g = (bigint >> 8) & 255;
        let b = bigint & 255;
        return [r, g, b];
    }

    // Helper function to convert RGB to hex
    function rgbToHex(r: number, g: number, b: number): string {
        return ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
    }

    let r: number, g: number, b: number;
    if (color.startsWith('#')) {
        color = color.slice(1);
    }

    if (color.length === 3) {
        // Handle shorthand hex (e.g., #123)
        color = color.split('').map(c => c + c).join('');
    }

    if (color.length === 6) {
        // Handle full hex (e.g., #112233)
        [r, g, b] = hexToRgb(color);
    } else if (color.startsWith('rgb')) {
        // Handle rgb format (e.g., rgb(123, 45, 67))
        let rgbValues = color.match(/\d+/g);
        if (rgbValues) {
            [r, g, b] = rgbValues.map(Number) as [number, number, number];
        } else {
            throw new Error('Invalid rgb color format');
        }
    } else {
        throw new Error('Invalid color format');
    }

    // Invert the colors
    r = 255 - r;
    g = 255 - g;
    b = 255 - b;

    // Convert inverted color to rgba with 70% opacity
    let rgba = `rgba(${r},${g},${b},${o})`;

    return rgba;
}