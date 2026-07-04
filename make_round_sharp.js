const sharp = require('sharp');

async function makeRound() {
  try {
    const inputImagePath = 'public/logo.png';
    const outputImagePath = 'app/icon.png';
    
    // get metadata
    const metadata = await sharp(inputImagePath).metadata();
    const size = Math.min(metadata.width, metadata.height);

    // create a circle mask
    const circleSvg = Buffer.from(
      `<svg width="${size}" height="${size}">
        <circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="white"/>
      </svg>`
    );

    // crop to square, apply circle mask
    await sharp(inputImagePath)
      .resize(size, size)
      .composite([{
        input: circleSvg,
        blend: 'dest-in'
      }])
      .png()
      .toFile(outputImagePath);

    console.log('Successfully created round app/icon.png');
  } catch (err) {
    console.error('Error:', err);
  }
}

makeRound();
