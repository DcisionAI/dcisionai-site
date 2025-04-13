export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-[#f9f4ef] via-[#e8ddff] to-[#cfd8f9] text-neutral-900">
        {children}
      </body>
    </html>
  );
}