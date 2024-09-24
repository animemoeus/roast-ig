export const metadata = {
  title: "🔥 Roasting IG ",
  description: "by Arter Tendean",
};
import "./globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
