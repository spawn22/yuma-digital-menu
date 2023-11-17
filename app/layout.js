import { Inter } from 'next/font/google'
import './globals.css'
import {Rajdhani} from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const rajdhani=Rajdhani({weight:['400','700'],subsets:['latin'],
display:'swap'})

export const metadata = {
  title: 'Yuma digital Menu',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${rajdhani.className} relative m-0 bg-[#3C3C3C] bg-no-repeat w-full h-full `} >{children }</body>
    </html>
  )
}
