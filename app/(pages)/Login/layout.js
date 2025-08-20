import { Roboto } from 'next/font/google'


const roboto = Roboto({
  weight: ['400', '700', '500', '300'],
  subsets: ['latin'],
})

export const metadata = {
  title: "EtiquetaFácil",
  description: "Site de etiquetas para controle de validade",
};

export default function LoginLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={roboto.className}
      >
        {children}
      </body>
    </html>
  );
}
