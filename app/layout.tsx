import "./globals.css";

export const metadata = {
  title: "Love Note",
  description: "Simple note app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className="p-6 max-w-xl mx-auto">{children}</body>
    </html>
  );
}
