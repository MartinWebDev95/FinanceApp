import { ArrowDetails } from '@/app/lib/utils'
import PieChart from './PieChart'
import BudgetsSummary from '../budgets/BudgetsSummary'
import { fetchBudgets } from '@/app/lib/data'
import Link from 'next/link'

const BudgetsChart = async () => {
  
  const budgets = await fetchBudgets();
  
  return (
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
  )
}

export default BudgetsChart