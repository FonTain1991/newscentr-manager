import { ApolloProvider } from '@/apollo'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { ConfigProvider } from 'antd'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cookies } from 'next/headers'
import '../styles/globals.css'

// eslint-disable-next-line new-cap
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Gouranna manager'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru' id='app'>
      <body className={inter.className}>
        <AntdRegistry>
          <ConfigProvider
            theme={{
              token: {
                fontFamily: 'var(--font-inter)',
              }
            }}
          >
            <ApolloProvider cookie={cookies().toString()}>
              {children}
            </ApolloProvider>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  )
}
