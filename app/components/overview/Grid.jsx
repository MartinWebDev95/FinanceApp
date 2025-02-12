import { ArrowDetails, PotsIcon } from "@/app/lib/utils";
import Link from "next/link";
import data from '@/app/lib/data.json'

const Grid = () => {
  return (
    <div className="mt-10 lg:mt-8 lg:grid lg:grid-cols-2 lg:grid-rows-12 lg:gap-4 h-full">
      {/* Pots */}
      <div className="p-6 mb-6 lg:mb-0 bg-white rounded-md shadow-lg lg:row-start-1 lg:row-end-6 lg:col-start-1 lg:col-end-2 w-full h-fit lg:h-full">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-neutral-900 text-2xl font-bold">Pots</h2>
          <Link href='/pots' className="flex items-center gap-2 group text-slate-600">
            <span>See details</span>
            <ArrowDetails />
          </Link>
        </div>

        <div className="flex flex-col md:flex-row items-center mt-2 gap-4 w-full h-full pb-0 lg:pb-10">
          <div className="w-full md:w-1/2 rounded-md bg-gray-200 flex items-center gap-2 h-full text-neutral-900 p-4 flex-1">
            <PotsIcon width='50' height='50' />

            <div className="w-full">
              <p className="mb-1 text-slate-600">Pots</p>
              <p className="font-bold text-3xl">
                ${data.pots.reduce((acc, currentValue) => acc + currentValue.total, 0)}
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 grid grid-cols-2 grid-rows-2 gap-y-2 h-full flex-1">
            {data.pots.slice(0,4).map((pot) => (
              <div key={pot.name} className="h-full flex items-center w-full">
                <div 
                  className="h-full w-1 rounded-md" 
                  style={{ backgroundColor: pot.theme }}
                />

                <div className="ml-2">
                  <p className="text-slate-600 text-xs">{pot.name}</p>
                  <p className="text-neutral-900 font-bold">${pot.total}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Budgets */}
      <div className="p-6 mb-6 lg:mb-0 bg-white rounded-md shadow-lg lg:row-start-1 lg:row-end-8 lg:col-start-2 lg:col-end-3">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-neutral-900 text-2xl font-bold">Budgets</h2>
          <Link href='/budgets' className="flex items-center gap-2 group text-slate-600">
            <span>See details</span>
            <ArrowDetails />
          </Link>
        </div>
      </div>

      {/* Transactions */}
      <div className="p-6 mb-6 lg:mb-0 bg-white rounded-md shadow-lg lg:row-start-6 lg:row-end-13 lg:col-start-1 lg:col-end-2">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-neutral-900 text-2xl font-bold">Transactions</h2>
          <Link href='/transactions' className="flex items-center gap-2 group text-slate-600">
            <span>See details</span>
            <ArrowDetails />
          </Link>
        </div>
      </div>

      {/* Recurring Bills */}
      <div className="p-6 bg-white rounded-md shadow-lg lg:row-start-8 lg:row-end-13 lg:col-start-2 lg:col-end-3">
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