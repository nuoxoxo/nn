export const metadata = {
  title: '✰ Golb ✰',
  description: '✰✰✰✰✰✰✰✰✰✰✰✰',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const header = (<header><div>
    <h1>nuoxoxo's blog</h1>
    <p>✰ Welcome to my playground! ✰</p>
  </div></header>)
  const footer = (<footer><div>
    <h6>Developed by nuoxoxo</h6>
  </div></footer>)
  return (
    <html lang="en">
      <head />
      <body>
        {header}
        {children}
        {footer}
      </body>
    </html>
  )
}
