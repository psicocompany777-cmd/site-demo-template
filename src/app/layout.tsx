import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import { business } from '@/config/business';
import './globals.css';

const serif = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-serif', weight: ['400', '500', '600'] });
const sans = Manrope({ subsets: ['latin'], variable: '--font-sans' });
export const metadata: Metadata = {
  title: business.seo.title, description: business.seo.description,
  openGraph: { title: business.seo.title, description: business.seo.description, type: 'website', locale: 'pt_BR', images: [business.images.hero.src] },
  robots: { index: false, follow: false }
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={`${serif.variable} ${sans.variable}`}>{children}</body></html>;
}
