import './styles/globals.modules.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PBL MESH Project',
  description: 'The final presentation of our 2023 Project based learning maths, english, science and HASS project. Designed and Built by Isaac Turner and Grace Littley',
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
