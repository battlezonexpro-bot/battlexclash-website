import { ImageResponse } from 'next/og';

export const size = { width: 192, height: 192 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '192px',
          height: '192px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '40px',
          background: 'linear-gradient(135deg, #1a0033 0%, #2d0060 40%, #0d0020 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Purple glow blur blob top-left */}
        <div
          style={{
            position: 'absolute',
            top: '-20px',
            left: '-20px',
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: 'rgba(138, 43, 226, 0.55)',
            filter: 'blur(28px)',
          }}
        />
        {/* Purple glow blur blob bottom-right */}
        <div
          style={{
            position: 'absolute',
            bottom: '-20px',
            right: '-20px',
            width: '90px',
            height: '90px',
            borderRadius: '50%',
            background: 'rgba(180, 0, 255, 0.4)',
            filter: 'blur(22px)',
          }}
        />
        {/* Accent glow center */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '110px',
            height: '110px',
            borderRadius: '50%',
            background: 'rgba(120, 0, 255, 0.25)',
            filter: 'blur(18px)',
          }}
        />
        {/* Glass card */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            width: '130px',
            height: '130px',
            borderRadius: '28px',
            background: 'rgba(255,255,255,0.06)',
            border: '1.5px solid rgba(180,0,255,0.35)',
            boxShadow: '0 0 24px rgba(138,43,226,0.3)',
          }}
        >
          {/* BX Text */}
          <div
            style={{
              fontSize: '52px',
              fontWeight: '900',
              color: 'white',
              letterSpacing: '-2px',
              lineHeight: 1,
              textShadow: '0 0 20px rgba(200,100,255,0.9), 0 0 40px rgba(160,0,255,0.5)',
            }}
          >
            BX
          </div>
          {/* Underline accent */}
          <div
            style={{
              marginTop: '4px',
              width: '60px',
              height: '3px',
              borderRadius: '2px',
              background: 'linear-gradient(90deg, #8b00ff, #da70d6)',
              boxShadow: '0 0 10px rgba(138,43,226,0.8)',
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
