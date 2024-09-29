import { Toaster } from "@/components/ui/toaster";

export const metadata = {
  title: "🔥 Roasting IG ",
  description: "by Arter Tendean",
};

import Providers from "./providers";

import { ThemeProvider } from "@/components/theme-provider";
import { ThemeSwitcher } from "@/components/theme-switcher";

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          <Providers>
            {children}
            <ThemeSwitcher />
            <Toaster />
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
