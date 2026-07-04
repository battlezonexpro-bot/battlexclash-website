import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'BattleXClash | Free Fire MAX Tournaments',
    short_name: 'BattleXClash',
    description: 'Play Free Fire MAX tournaments, compete with players across India, win real cash prizes and instant UPI withdrawals.',
    start_url: '/',
    display: 'standalone',
    background_color: '#080608',
    theme_color: '#E11D48',
    icons: [
      {
        src: '/favicon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
