import Link from 'next/link'
import { Navbar, Text } from './components'
import { Providers } from './providers'

import './layout.scss'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <main className='main-layout'>
            <Navbar />
            <div style={{ gridColumn: "span 1" }} />
            <div className='content'>
              <div className='page-header'>
                <div className='page-header__nav'>
                  <Link href="/">
                    <Text fontFamily='newsreader'> About me </Text>
                  </Link>
                </div>
                <div className='page-header__title'>
                  <Text as="h3" fontFamily='newsreader'>Collection of Books</Text>
                  <Text fontFamily='newsreader' className='currently-reading'> Currently reading: <Text fontFamily='newsreader' style={{
                    color: "var(--active-green)"
                  }}> Anansi boys</Text>  </Text>
                </div>
              </div>
              {children}
            </div>
          </main>
        </Providers>
      </body>
    </html>
  )
}
