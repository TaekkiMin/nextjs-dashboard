import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* antialiased 글꼴을 사용 */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
