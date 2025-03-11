import { ArrowDetails, calculatePercentage } from "@/app/lib/utils";
import Link from "next/link";
import { BtnMenuBudget } from "../pots/buttons";
import { fetchTransactionsByCategory } from "@/app/lib/data";

const Budget = async ({ budget }) => {

  const latestTransactions = await fetchTransactionsByCategory({ categoryId: budget.category_id })

  return (
    <div className="bg-white rounded-md shadow-lg p-6 mb-6">
      <div className="flex items-center justify-between relative">
        <h2 className="flex items-center gap-2.5">
          <span 
            className="w-4 h-4 rounded-full" 
            style={{ backgroundColor: budget.theme }}
          >
          </span>
          
          <span className="text-xl font-bold">{budget.label}</span> 
        </h2>

        <BtnMenuBudget />
      </div>

      <p className="text-gray-500 mt-3">Maximum of ${`${budget.maximum}`}</p>

      {/* Custom Progress Bar */}
      <div className="w-full h-3 bg-gray-200 rounded-full mt-3">
        <div 
          className="h-3 rounded-full" 
          style={{ 
            backgroundColor: budget.theme, 
            width: calculatePercentage({ 
              total: Math.abs(budget.total_transactions_amount), 
              target: budget.maximum 
            }) + '%'
          }}
        /> 
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="relative">
          <div className="absolute left-0 top-0 h-full w-1 rounded-full" style={{ backgroundColor: budget.theme }}/>
          <p className="pl-4 text-xs text-gray-500">Spent</p>
          <p className="pl-4 font-bold">${Math.abs(budget.total_transactions_amount)}</p>
        </div>
        
        <div className="relative">
          <div className="absolute left-0 top-0 h-full w-1 rounded-full bg-amber-200"/>
          <p className="pl-4 text-xs text-gray-500">Free</p>
          <p className="pl-4 font-bold">
            ${budget.maximum - Math.abs(budget.total_transactions_amount)}
          </p>
        </div>
      </div>

      <div className="bg-slate-200 p-4 mt-4 rounded-md">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-neutral-900 text-lg font-bold">Latest Spending</h2>
          
          <Link 
            href={`/transactions?category=${budget.value}`} 
            className="flex items-center gap-2 group text-slate-600"
          >
            <span>See details</span>
            <ArrowDetails />
          </Link>
        </div>

        <ul className="mt-2">
          {latestTransactions.map(transaction => (
            <li key={transaction.id} className="flex items-center justify-between border-b border-neutral-300 py-2">
              <div className="flex items-center gap-2">
                <img 
                  src={transaction.avatar}
                  alt={transaction.name} 
                  className="rounded-full w-9 h-9"
                />
                <p className="font-bold text-neutral-900">
                  {transaction.name}
                </p>
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
    </div>
  )
}

export default Budget;