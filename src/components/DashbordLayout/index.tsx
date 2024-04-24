import Footer from "./Footer";
import Header from "./Header";

interface DashboardLayoutProps {
  children: React.ReactNode;
}
export default function DashboardLayout({
  children,
}: Readonly<DashboardLayoutProps>) {
  return (
    <div className="bg-gray-100 h-screen w-screen overflow-auto">
      <Header />
      <main className="mt-3 flex-grow">
        <div className="max-w-screen-2xl 2xl:max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8 h-full xl:pb-[110px] flex flex-col">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
