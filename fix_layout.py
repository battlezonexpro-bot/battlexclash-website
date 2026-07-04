with open('/storage/emulated/0/battlexclash-website/app/layout.tsx', 'r') as f:
    content = f.read()

import re

# We will completely replace the metadata block.
metadata_pattern = r'export const metadata: Metadata = \{.*?\n\};'
metadata_replacement = """export const metadata: Metadata = {
  metadataBase: new URL("https://battlexclash.online"),
  title: "BattleXClash | Free Fire MAX Tournaments, Esports & Win Real Cash",
  description: "Join BattleXClash to play daily Free Fire MAX tournaments, compete with players across India, win real cash prizes, instant UPI withdrawals and exciting esports competitions.",
  keywords: [
    "BattleXClash", "Battle X Clash", "battlexclash", "battlex clash", "battle clash", 
    "Free Fire MAX", "Free Fire Tournament", "FF Max Tournament", "Free Fire Esports", 
    "Esports India", "Gaming Tournament", "Play and Earn", "Win Real Cash", 
    "UPI Tournament", "BGMI Tournament", "Gaming App", "Tournament App", 
    "Free Fire India", "Cash Tournament", "Battle Royale", "Online Tournament"
  ],
  alternates: {
    canonical: "https://battlexclash.online",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/favicon.png",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "BattleXClash | Free Fire MAX Tournaments, Esports & Win Real Cash",
    description: "Join BattleXClash to play daily Free Fire MAX tournaments, compete with players across India, win real cash prizes, instant UPI withdrawals and exciting esports competitions.",
    url: "https://battlexclash.online",
    siteName: "BattleXClash",
    images: [{ url: "https://battlexclash.online/banner.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BattleXClash | Free Fire MAX Tournaments, Esports & Win Real Cash",
    description: "Join BattleXClash to play daily Free Fire MAX tournaments, compete with players across India, win real cash prizes, instant UPI withdrawals and exciting esports competitions.",
    images: ["https://battlexclash.online/banner.jpg"],
  }
};"""

content = re.sub(metadata_pattern, metadata_replacement, content, flags=re.DOTALL)

# Now inject JSON-LD into the head
json_ld = """
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://battlexclash.online/#organization",
                  "name": "BattleXClash",
                  "url": "https://battlexclash.online",
                  "logo": "https://battlexclash.online/logo.png"
                },
                {
                  "@type": "WebSite",
                  "@id": "https://battlexclash.online/#website",
                  "url": "https://battlexclash.online",
                  "name": "BattleXClash",
                  "publisher": {
                    "@id": "https://battlexclash.online/#organization"
                  }
                },
                {
                  "@type": "SoftwareApplication",
                  "@id": "https://battlexclash.online/#software",
                  "name": "BattleXClash App",
                  "applicationCategory": "GameApplication",
                  "operatingSystem": "ANDROID",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "INR"
                  }
                }
              ]
            })
          }}
        />"""

content = content.replace('<html lang="en"', f'<html lang="en" className={{`${{spaceGrotesk.variable}} ${{rajdhani.variable}} antialiased`}}>\n      <head>{json_ld}\n      </head>')
content = content.replace(' className={`${spaceGrotesk.variable} ${rajdhani.variable} antialiased`}>', '>')

with open('/storage/emulated/0/battlexclash-website/app/layout.tsx', 'w') as f:
    f.write(content)
