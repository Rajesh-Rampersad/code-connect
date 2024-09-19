import { Prompt } from "next/font/google";
import { Aside } from '@/components/Aside';
import './globals.css';

export const metadata = {
  title: "Code Connect",
  description: "Uma rede social para Devs!",
};
const prompt = Prompt({
  weight: ['400', '600'],
  subsets: ['latin', 'latin-ext', 'thai', 'vietnamese'], // Add this line
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={prompt.className}>
    <body>
      <div className='app-container'>
        <Aside />
        {children}
        <div>
          <Aside />
        </div>
        <div className='main-content'>
          {children}
        </div>
      </div>
    </body>
  </html>
  );
}



