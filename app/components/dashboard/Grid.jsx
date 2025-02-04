import { ArrowDetails } from "@/app/lib/utils";
import Link from "next/link";

const Grid = () => {
  return (
    <div className="mt-10 lg:mt-8 grid grid-cols-1 grid-rows-24 lg:grid-cols-2 lg:grid-rows-12 gap-4 h-screen">
      <div className="p-6 bg-white rounded-md shadow-lg row-start-1 row-end-6 lg:col-start-1 lg:col-end-2">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-neutral-900 text-2xl font-bold">Pots</h2>
          <Link href='/pots' className="flex items-center gap-2 group text-slate-600">
            <span>See details</span>
            <ArrowDetails />
          </Link>
        </div>
      </div>

      <div className="p-6 bg-white rounded-md shadow-lg row-start-12 row-end-19 lg:row-start-1 lg:row-end-8 lg:col-start-2 lg:col-end-3">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-neutral-900 text-2xl font-bold">Budgets</h2>
          <Link href='/budgets' className="flex items-center gap-2 group text-slate-600">
            <span>See details</span>
            <ArrowDetails />
          </Link>
        </div>
      </div>

      <div className="p-6 bg-white rounded-md shadow-lg row-start-6 row-end-12 lg:row-end-13 lg:col-start-1 lg:col-end-2">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-neutral-900 text-2xl font-bold">Transactions</h2>
          <Link href='/transactions' className="flex items-center gap-2 group text-slate-600">
            <span>See details</span>
            <ArrowDetails />
          </Link>
        </div>
      </div>

      <div className="p-6 bg-white rounded-md shadow-lg row-start-19 row-end-25 lg:row-start-8 lg:row-end-13 lg:col-start-2 lg:col-end-3">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-neutral-900 text-2xl font-bold">Recurring Bills</h2>
          <Link href='/recurring-bills' className="flex items-center gap-2 group text-slate-600">
            <span>See details</span>
            <ArrowDetails />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Grid;