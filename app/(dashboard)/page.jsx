import Link from "next/link";
import { LogoutIcon } from "../lib/utils";
import Cards from "../components/overview/Cards";
import Grid from "../components/overview/Grid";
import data from '../lib/data.json';

export default function OverviewPage(){
  return (
      <>
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

      <div className="mt-6 w-full flex flex-col md:flex-row items-center justify-between gap-6">
        <Cards title='Current Balance' data={data.balance.current} main />
        <Cards title='Income' data={data.balance.income} />
        <Cards title='Expenses' data={data.balance.expenses} />
      </div>

      <Grid />
    </>
  )
}