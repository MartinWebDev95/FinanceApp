import Link from "next/link";
import { LogoutIcon } from "../lib/utils";
import Cards from "../components/overview/Cards";

export default function OverviewPage(){
  return (
    <div className="p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Overview</h1>
        <Link 
          href='/logout' 
          className="bg-neutral-900 text-white font-bold rounded-md p-2 hover:bg-neutral-800 transition-all ease-in-out duration-200 flex items-center gap-2">
            <LogoutIcon/>
            <span>
              Logout
            </span>
        </Link>
      </div>

      <div className="mt-6 w-full flex items-center justify-between gap-6">
        <Cards title='Current Balance' data='30000' main />
        <Cards title='Income' data='50000' />
        <Cards title='Expenses' data='40000' />
      </div>
    </div>
  )
}