import Sidenav from "../components/dashboard/Sidenav";

export default function DashboardLayout({ children }){
  return (
    <main className="flex flex-col justify-between lg:flex-row h-full relative">
      <Sidenav/>
      <section className="w-full order-1 lg:order-2 h-full overflow-y-auto">
        {children}
      </section>
    </main>
  )
}