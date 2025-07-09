import './global.css'

export const metadata = {
  title: 'SB Chat',
  description: 'Chat UI con Next.js y Tailwind',
}

import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
