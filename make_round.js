const Jimp = require('jimp');

async function makeRound() {
  try {
    const image = await Jimp.read('public/logo.png');
    const size = Math.min(image.bitmap.width, image.bitmap.height);
    
    image.cover(size, size);
    image.circle();
    
    await image.writeAsync('app/icon.png');
    console.log('Successfully created round app/icon.png');
  } catch (err) {
    console.error(err);
  }
}

makeRound();
