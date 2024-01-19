import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './ui/globals.css'
import SideNav from './ui/dashboard/sidenav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'DoToDo',
    template: '%s | DoToDo'
  },
  description: 'Do to do right!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-background-dark`}>
        <div>
          <SideNav/>
        </div>
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}