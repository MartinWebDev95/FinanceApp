import Sidenav from "../components/dashboard/Sidenav";

export default function OverviewLayout({ children }){
  return (
    <main className="flex flex-col justify-between lg:flex-row h-full">
      <Sidenav/>
      <section className="w-full order-1 lg:order-2 h-full">
        {children}
      </section>
    </main>
  )
}