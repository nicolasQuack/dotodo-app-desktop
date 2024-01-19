import type { Metadata } from 'next'
import { Flowbite, ThemeModeScript } from "flowbite-react";
import { Inter } from 'next/font/google'
import { type FC, type PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import "./globals.css";
import { flowbiteTheme } from './theme';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'DoToDo',
    template: '%s | DoToDo'
  },
  description: 'Do to do right!',
}

const RootLayout: FC<PropsWithChildren> = function ({children}) {
  return (
    <html lang='en'>
      <head>
        <ThemeModeScript />
      </head>
      <body>
        <Flowbite theme={{theme: flowbiteTheme}}>{children}</Flowbite>
      </body>
    </html>
    )
}

export default RootLayout;
