import { ImageResponse } from 'next/og';
import { promises as fs } from 'fs';
import path from 'path';

export const size = { width: 192, height: 192 };
export const contentType = 'image/png';

export default async function Icon() {
  // Read local file directly so we don't rely on the website being online
  const imagePath = path.join(process.cwd(), 'public', 'logo.png');
  const imageData = await fs.readFile(imagePath);
  const base64Image = imageData.toString('base64');

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          overflow: 'hidden',
        }}
      >
        <img 
          src={`data:image/png;base64,${base64Image}`} 
          width="192" 
          height="192" 
          style={{ objectFit: 'cover' }} 
        />
      </div>
    ),
    { ...size }
  );
}
