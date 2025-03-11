import Budget from "@/app/components/budgets/Budget";
import { BtnAddNewBudget } from "@/app/components/pots/buttons";
import { fetchBudgets, fetchCategories } from "@/app/lib/data";

export default async function BudgetsPage() {

  const budgets = await fetchBudgets();
  const categories = await fetchCategories();

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Budgets</h1>
        <BtnAddNewBudget categories={categories} />
      </div>

      <div className="flex flex-col lg:flex-row items-start gap-4 mt-8">
        <div className="w-full lg:w-2/5 bg-white rounded-md shadow-lg p-4">
          <p className="text-neutral-900 mb-4 text-lg font-bold">Spending Summary</p>
          <ul>
            {
              budgets.map(budget => (
                <li key={budget.id} className="py-4 border-b relative">
                  <div 
                    className="absolute top-0 left-0 w-2 h-full rounded-full" 
                    style={{ backgroundColor: budget.theme }} 
                  />

                  <div className="flex items-center justify-between pl-4">
                    <p className="font-bold text-neutral-900">{budget.label}</p>
                    <p className="text-slate-500">
                      <span className="font-bold text-neutral-900">
                        ${Math.abs(budget.total_transactions_amount)}
                      </span>
                      {' '}
                      of
                      {' '}
                      <span>
                        ${budget.maximum}
                      </span>         
                    </p>               
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
        
        <div className="w-full lg:w-3/5">
          {budgets.map(budget => (
            <Budget key={budget.id} budget={budget} />
          ))}
        </div>
      </div>
    </>
  )
}