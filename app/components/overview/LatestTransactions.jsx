import { fetchTransactions } from '@/app/lib/data';
import { ArrowDetails } from '@/app/lib/utils'
import Link from 'next/link'
import EmptyPanel from './EmptyPanel';

const LatestTransactions = async () => {
  
  const transactions = await fetchTransactions({ limit: 4 });

  if(transactions.length === 0) {
    return <EmptyPanel title="Transactions" href="/transactions" />
  } 
    
  
  return (
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
  )
}

export default LatestTransactions