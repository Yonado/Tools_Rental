import '../styles/globals.css'
import Header from './Header'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}): JSX.Element {
    return (
        <>
            <html>
                <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </head>
                <body>
                    <Header />
                    <div className={inter.className}>
                        {children}
                    </div>
                </body>
            </html>
        </>
    )
}
