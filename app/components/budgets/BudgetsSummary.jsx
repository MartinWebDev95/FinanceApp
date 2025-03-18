const BudgetsSummary = ({ budgets }) => {
  return (
    <ul>
      {
        budgets.map(budget => (
          <li key={budget.id} className="py-4 border-b relative">
            <div 
              className="absolute top-2 bottom-2 left-0 w-2 rounded-full" 
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
  )
}

export default BudgetsSummary;