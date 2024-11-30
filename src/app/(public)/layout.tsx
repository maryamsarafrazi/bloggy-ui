export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>This is the header in root layout</header>
      {children}
      <footer>This is the footer in root layout</footer>
    </>
  );
}
