import { fetchTransactionsByCategory } from '@/app/lib/data'
import { ArrowDetails } from '@/app/lib/utils'
import Link from 'next/link'

const LatestSpending = async ({ budget }) => {

  const latestTransactions = await fetchTransactionsByCategory({ categoryId: budget.category_id })

  return (
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
  )
}

export default LatestSpending