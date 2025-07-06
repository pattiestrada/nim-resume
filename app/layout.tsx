import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '@/app/globals.css'
import { Header } from '@/app/header'
import { Footer } from '@/app/footer'
import { ThemeProvider } from 'next-themes'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  title: 'Patricia Estrada',
  description:
    'Personal website and portfolio of Patricia Estrada. Software engineer, web designer, and writer. Showcasing work experience, skills, blog posts, and projects.',
  openGraph: {
    title: 'Patricia Estrada',
    description:
      'Personal website and portfolio of Patricia Estrada. Software engineer, web designer, and writer.',
    url: 'https://www.patti.codes',
    siteName: 'Patricia Estrada',
    images: [
      {
        url: '/img/og.png',
        width: 1200,
        height: 630,
        alt: 'Patricia Estrada Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  metadataBase: new URL('https://www.patti.codes'),
  twitter: {
    card: 'summary_large_image',
    title: 'Patricia Estrada',
    description:
      'Personal website and portfolio of Patricia Estrada. Software engineer, web designer, and writer. Showcasing work experience, skills, blog posts, and projects.',
    creator: '@pattycodes',
    images: ['/img/og.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
}

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} bg-white tracking-tight antialiased`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="light"
        >
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
            <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
