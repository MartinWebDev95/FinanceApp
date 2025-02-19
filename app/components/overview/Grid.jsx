import { ArrowDetails, PotsIcon } from "@/app/lib/utils";
import Link from "next/link";
import data from '@/app/lib/data.json'

const Grid = () => {
  return (
    <div className="mt-10 lg:mt-8 lg:grid lg:grid-cols-2 lg:auto-rows-min lg:gap-4 h-full">
      {/* Pots */}
      <div className="p-6 mb-6 lg:mb-0 bg-white rounded-md shadow-lg lg:col-start-1 lg:col-end-2 w-full h-fit">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-neutral-900 text-2xl font-bold">Pots</h2>
          <Link href='/pots' className="flex items-center gap-2 group text-slate-600">
            <span>See details</span>
            <ArrowDetails />
          </Link>
        </div>

        <div className="flex flex-col md:flex-row items-center mt-4 gap-4 w-full h-full">
          <div className="w-full md:w-1/2 rounded-md bg-slate-200 flex items-center gap-2 h-full text-neutral-900 p-4 flex-1">
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
      <div className="p-6 mb-6 lg:mb-0 bg-white rounded-md shadow-lg lg:col-start-2 lg:col-end-3 h-fit">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-neutral-900 text-2xl font-bold">Budgets</h2>
          <Link href='/budgets' className="flex items-center gap-2 group text-slate-600">
            <span>See details</span>
            <ArrowDetails />
          </Link>
        </div>
      </div>

      {/* Transactions */}
      <div className="p-6 mb-6 lg:mb-0 bg-white rounded-md shadow-lg lg:col-start-1 lg:col-end-2 h-fit">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-neutral-900 text-2xl font-bold">Transactions</h2>
          <Link href='/transactions' className="flex items-center gap-2 group text-slate-600">
            <span>See details</span>
            <ArrowDetails />
          </Link>
        </div>

        <ul className="mt-2">
          {data.transactions.slice(0,4).map((transaction, index) => (
            <li key={index} className="flex items-center justify-between border-b py-2">
              <div className="flex items-center gap-2">
                <img 
                  src="./assets/Logo-1.jpg" 
                  alt={transaction.name} 
                  className="rounded-full w-9 h-9"
                />
                <p className="font-bold text-neutral-900">{transaction.name}</p>
              </div>

              <div className="text-right">
                <p className="mb-1 font-bold text-neutral-900">
                  {transaction.amount > 0 ? (
                    `$${transaction.amount}`
                  ) : (
                    `-$${Math.abs(transaction.amount)}`
                  )}
                </p>
                <p className="text-xs text-gray-500">{transaction.date.split('T')[0]}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Recurring Bills */}
      <div className="p-6 bg-white rounded-md shadow-lg lg:col-start-2 lg:col-end-3 h-fit">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-neutral-900 text-2xl font-bold">Recurring Bills</h2>
          <Link href='/recurring-bills' className="flex items-center gap-2 group text-slate-600">
            <span>See details</span>
            <ArrowDetails />
          </Link>
        </div>

        <div className="w-full mt-4">
          <p className="rounded-md py-4 w-full flex items-center justify-between bg-gray-100 pr-3 relative before:absolute before:rounded-l-md before:top-0 before:bottom-0 before:w-2 before:h-full before:bg-green-300 mb-2">
            <span className="text-gray-500 pl-3">Paid Bills</span>
            <span className="font-bold">$1000000</span>
          </p>
          <p className="rounded-md py-4 w-full flex items-center justify-between bg-gray-100 pr-3 relative before:absolute before:rounded-l-md before:top-0 before:bottom-0 before:w-2 before:h-full before:bg-amber-300 mb-2">
            <span className="text-gray-500 pl-3">Total Upcoming</span>
            <span className="font-bold">$1000000</span>
          </p>
          <p className="rounded-md py-4 w-full flex items-center justify-between bg-gray-100 pr-3 relative before:absolute before:rounded-l-md before:top-0 before:bottom-0 before:w-2 before:h-full before:bg-red-400">
            <span className="text-gray-500 pl-3">Due Soon</span>
            <span className="text-red-600 font-bold">$1000000</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Grid;