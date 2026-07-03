import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 192,
  height: 192,
};
export const contentType = 'image/png';

export default function Icon() {
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
        {/* We use an img tag with the live URL so Next.js OG edge runtime can fetch and render it as a PNG */}
        <img src="https://battlexclash.com/logo.png" width="192" height="192" style={{ objectFit: 'cover' }} />
      </div>
    ),
    { ...size }
  );
}
