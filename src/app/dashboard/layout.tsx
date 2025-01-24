import DashboardSidebar from "../_components/DashboardSidebar";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="flex grow flex-col md:flex-row">
      <DashboardSidebar />
      <article className="grow p-6">{children}</article>
    </main>
  );
}
