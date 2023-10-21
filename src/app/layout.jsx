import NavegationBar from "@/components/navegation-bar";
import { Gabarito } from "next/font/google"

import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

const gabarito = Gabarito({ subsets: ["latin"] })

export const metadata = {
  title: "Eduardo Soares",
  description: "Developer and Computer Scientist",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={gabarito.className + ` flex flex-row w-screen text-white w-screen`}>
        <NavegationBar />
        { children }
      </body>
    </html>
  )
}
