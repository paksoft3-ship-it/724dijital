import "./(site)/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Anıl Yazılım | Dijital Ajans",
    template: "%s | Anıl Yazılım",
  },
  description: "Web geliştirme, e-ticaret, SEO, reklam yönetimi ve otomasyon çözümleri.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
