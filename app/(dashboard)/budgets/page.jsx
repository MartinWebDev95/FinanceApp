import Budget from "@/app/components/budgets/Budget";
import BudgetsSummary from "@/app/components/budgets/BudgetsSummary";
import { BtnAddNewBudget } from "@/app/components/pots/buttons";
import { BudgetSkeleton, BudgetSummarySkeleton } from "@/app/components/skeletons";
import { fetchBudgets, fetchCategories } from "@/app/lib/data";
import { Suspense } from "react";

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Finance App | Budgets',
};

export default async function BudgetsPage() {

  const data = await Promise.all([fetchBudgets(), fetchCategories()]);

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Budgets</h1>
        <BtnAddNewBudget categories={data[1]} />
      </div>

      <div className="flex flex-col lg:flex-row items-start gap-4 mt-8">
        <Suspense fallback={<BudgetSummarySkeleton />}>
          <div className="w-full lg:w-2/5 bg-white rounded-md shadow-lg p-4">
            <p className="text-neutral-900 mb-4 text-lg font-bold">Spending Summary</p>
            <BudgetsSummary budgets={data[0]} />
          </div>
        </Suspense>
        
        <Suspense fallback={<BudgetSkeleton />}>
          <ul className="w-full lg:w-3/5">
            {data[0].map(budget => (
              <Budget key={budget.id} budget={budget} categories={data[1]} />
            ))}
          </ul>
        </Suspense>
      </div>
    </>
  )
}