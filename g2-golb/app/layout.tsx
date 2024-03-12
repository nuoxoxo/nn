import Link from "next/link";

export const metadata = {
  title: "✰ BLOGSPOT ✰",
  description: "✰✰✰✰✰✰✰✰✰✰✰✰",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div>
        <Link href='/'><h1>nuoxoxo's blog</h1></Link>
        <p>✰ Welcome to my playground! ✰</p>
      </div>
    </header>
  );
  const footer = (
    <>
      <footer>
        <div>
          <h6>Developed by nuoxoxo</h6>
        </div>
      </footer>
      <footer>
        <div>
          <img width="300px" src="./favicon.svg" />
          {/* <img width="300px" src={require("./favicon.svg")} /> */}
        </div>
      </footer>
    </>
  );
  return (
    <html lang="en">
      <head />
      <body>
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
