import Footer from "./Footer";
import Header from "./Header";

interface DashboardLayoutProps {
  children: React.ReactNode;
}
export default function DashboardLayout({ children }: Readonly<DashboardLayoutProps>) {
  return (
    <div className="overflow-hidden">
      <Header />
      <main className="min-h-[75vh] px-4 py-4 bg-gray-100 dark:bg-slate-950 w-[95%] rounded-3xl mx-auto overflow-auto">{children}</main>
      <Footer />
    </div>
  );
}
