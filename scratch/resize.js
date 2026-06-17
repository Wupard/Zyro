const Jimp = require('jimp');

async function main() {
    try {
        const imgPath = '../assets/zyro_pwa_icon.png';
        console.log(`Reading image from ${imgPath}...`);
        const img = await Jimp.read(imgPath);
        
        const width = img.bitmap.width;
        const height = img.bitmap.height;
        console.log(`Original dimensions: ${width}x${height}`);
        
        // We'll scale the original content to 65% of its size
        const scaleFactor = 0.65;
        const newInnerWidth = Math.floor(width * scaleFactor);
        const newInnerHeight = Math.floor(height * scaleFactor);
        
        // Clone and resize the image
        const resizedImg = img.clone().resize(newInnerWidth, newInnerHeight);
        
        // Get the top-left color to use as background
        const bgInt = img.getPixelColor(0, 0);
        
        // Create a new image of the original size, filled with the background color
        const newImg = new Jimp(width, height, bgInt);
        
        // Calculate offset to center the resized image
        const xOffset = Math.floor((width - newInnerWidth) / 2);
        const yOffset = Math.floor((height - newInnerHeight) / 2);
        
        // Composite the resized image onto the background
        newImg.composite(resizedImg, xOffset, yOffset);
        
        // Write the result
        const outPath = '../assets/zyro_pwa_icon.png';
        await newImg.writeAsync(outPath);
        console.log(`Successfully resized and padded image, saved to ${outPath}`);
    } catch (err) {
        console.error('Error during image processing:', err);
    }
}

main();
