import { Navbar } from "./_components/navbar";

export const metadata = {
  title: '',
  description: '',
};
export default function MarketingLayout({
  children
}: {
  children: React.ReactNode;
})
{
  return (
    <main className="h-screen">
      <Navbar />
      {children}
    </main>
  );
}