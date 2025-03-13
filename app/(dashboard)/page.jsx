import { LogoutIcon } from "../lib/utils";
import Cards from "../components/overview/Cards";
import Grid from "../components/overview/Grid";
import { signOut } from "@/auth";
import { fetchFinancesData } from "../lib/data";

export default async function OverviewPage(){
  
  const { currentBalance, income, expenses } = await fetchFinancesData();

  return (
      <>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Overview</h1>
        <form 
          action={async () => {
            'use server';
            await signOut({ redirectTo: '/login' });
          }}>
          <button type="submit" className="bg-neutral-900 text-white font-bold rounded-md p-2 hover:bg-neutral-800 transition-all ease-in-out duration-200 flex items-center gap-2">
            <LogoutIcon/>
            <span>
              Logout
            </span>
          </button>
        </form>
      </div>

      <div className="mt-6 w-full flex flex-col md:flex-row items-center justify-between gap-6">
        <Cards title='Current Balance' data={currentBalance.sum} main />
        <Cards title='Income' data={income.sum} />
        <Cards title='Expenses' data={Math.abs(expenses.sum).toFixed(2)} />
      </div>

      <Grid />
    </>
  )
}