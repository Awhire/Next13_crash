import './globals.css'
import { Poppins } from 'next/font/google'
import Header from './components/Header'

const poppins = Poppins({ 
  weight: ['400', '500', '700'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Khiztech Media',
  description: 'Web development on nextjs crash courses',
  keywords: 'web development, web design, javascript, react, node, css '
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className='container'>
          {children}
        </main>
      </body>
    </html>
  )
}
