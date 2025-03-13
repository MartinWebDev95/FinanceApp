import LatestSpending from "./LatestSpending";
import BudgetInfo from "./BudgetInfo";

const Budget = ({ budget, categories }) => {

  return (
    <div className="bg-white rounded-md shadow-lg p-6 mb-6">
      <BudgetInfo budget={budget} categories={categories} />

      <LatestSpending budget={budget} />
    </div>
  )
}

export default Budget;