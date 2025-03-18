import { ArrowDetails, PotsIcon } from "@/app/lib/utils";
import Link from "next/link";
import { fetchBillsSummary, fetchBudgets, fetchPots, fetchTransactions } from "@/app/lib/data";
import PieChart from "./PieChart";
import BudgetsSummary from "../budgets/BudgetsSummary";

const Grid = async () => {

  const { paidBills, upcomingBills, dueSoon } = await fetchBillsSummary();
  const pots = await fetchPots({ limit: 4 });
  const transactions = await fetchTransactions({ limit: 4 });
  const budgets = await fetchBudgets();

  return (
    <div className="mt-10 lg:mt-8 columns-1 lg:columns-2 gap-6">
      {/* Pots */}
      <div className="break-inside-avoid p-6 mb-6 bg-white rounded-md shadow-lg">
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
                ${pots[0].total_sum}
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 grid grid-cols-2 grid-rows-2 gap-y-2 h-full flex-1">
            {pots.map((pot) => (
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
      <div className="break-inside-avoid p-6 mb-6 bg-white rounded-md shadow-lg">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-neutral-900 text-2xl font-bold">Budgets</h2>
          <Link href='/budgets' className="flex items-center gap-2 group text-slate-600">
            <span>See details</span>
            <ArrowDetails />
          </Link>
        </div>

        <div className="flex flex-col md:flex-row lg:flex-col items-center gap-2">
          <div className="w-80 md:w-1/2 lg:w-80">
            <PieChart budgets={budgets} />
          </div>

          <div className="w-full md:w-1/2 lg:w-full">
            <BudgetsSummary budgets={budgets} />
          </div>
        </div>
      </div>

      {/* Transactions */}
      <div className="break-inside-avoid p-6 mb-6 bg-white rounded-md shadow-lg">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-neutral-900 text-2xl font-bold">Transactions</h2>
          <Link href='/transactions' className="flex items-center gap-2 group text-slate-600">
            <span>See details</span>
            <ArrowDetails />
          </Link>
        </div>

        <ul className="mt-2">
          {transactions.map(transaction => (
            <li key={transaction.id} className="flex items-center justify-between border-b py-2">
              <div className="flex items-center gap-2">
                <img 
                  src={transaction.avatar}
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
                <p className="text-xs text-gray-500">
                  {new Date(transaction.date).toLocaleDateString()}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Recurring Bills */}
      <div className="break-inside-avoid p-6 mb-6 bg-white rounded-md shadow-lg">
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
            <span className="font-bold">${Math.abs(paidBills.sum)}</span>
          </p>
          <p className="rounded-md py-4 w-full flex items-center justify-between bg-gray-100 pr-3 relative before:absolute before:rounded-l-md before:top-0 before:bottom-0 before:w-2 before:h-full before:bg-amber-300 mb-2">
            <span className="text-gray-500 pl-3">Total Upcoming</span>
            <span className="font-bold">${Math.abs(upcomingBills.sum)}</span>
          </p>
          <p className="rounded-md py-4 w-full flex items-center justify-between bg-gray-100 pr-3 relative before:absolute before:rounded-l-md before:top-0 before:bottom-0 before:w-2 before:h-full before:bg-red-400">
            <span className="text-gray-500 pl-3">Due Soon</span>
            <span className="text-red-600 font-bold">${Math.abs(dueSoon.sum)}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Grid;