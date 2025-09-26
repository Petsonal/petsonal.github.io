import "./globals.css";
import "./index.css";
import "../styles/custom.css";
import "katex/dist/katex.min.css";

import Footer from "@/components/footer";
import Body from "@/components/body";
import { ThemeProvider } from "next-themes";
import Header from "@/components/header";
// import { useThemeConfig } from "@/contexts/theme";

export const metadata = {
  title: "Petsonal AI - Transform Your Photos into Adorable Pet Avatars",
  description:
    "Transform your personal photos into cute pet avatars using AI. Upload your image and watch as Petsonal AI converts your human features into an adorable pet version of yourself.",
};

export default function RootLayout({ children }) {
  // const themeConfig = useThemeConfig()
  // <html lang="en" className="js-focus-visible light" suppressHydrationWarning={true} dir="ltr" style={{ colorScheme: "light" }} >

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body className="nextra-banner-hidden">
        <div dir="ltr">
          <Header />
          <Body>
            <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
              {children}
            </ThemeProvider>
          </Body>
          <Footer />
        </div>
      </body>
    </html>
  );
}
