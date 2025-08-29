import { Roboto } from 'next/font/google'

import "./globals.css";
import NavHeader from "../components/Layout/Nav/nav";
import { Providers } from '../providers';

const roboto = Roboto({
  weight: ['400', '700', '500', '300'],
  subsets: ['latin'],
})

export const metadata = {
  title: "EtiquetaFácil",
  description: "Site de etiquetas para controle de validade",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={roboto.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
