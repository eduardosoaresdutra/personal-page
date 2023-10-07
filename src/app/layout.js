import "./globals.css"
import { Gabarito } from "next/font/google"

const gabarito = Gabarito({ subsets: ["latin"] })

export const metadata = {
  title: "Eduardo Soares",
  description: "Developer and Computer Scientist",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={gabarito.className + ` text-white`}>{children}</body>
    </html>
  )
}
