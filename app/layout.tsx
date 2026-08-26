import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title:'Hiếu — Senior UX/UI Designer ứng tuyển RT Holdings',
  description:'Thư ứng tuyển vị trí Senior UX/UI Designer tại RT Holdings — chuyển hóa hệ thống giáo dục phức tạp thành trải nghiệm rõ ràng và có khả năng mở rộng.',
  openGraph:{title:'Complex systems. Human experiences.',description:'Hiếu — Senior UX/UI Designer · RT Holdings',images:['/og.png']},
  twitter:{card:'summary_large_image',title:'Complex systems. Human experiences.',description:'Hiếu — Senior UX/UI Designer · RT Holdings',images:['/og.png']}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
