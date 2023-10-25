import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/global.scss';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EKS Portfolio',
  description: 'A simple portfolio from Erick Kenji Sugahara',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
