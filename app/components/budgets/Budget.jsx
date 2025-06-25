import LatestSpending from "./LatestSpending";
import BudgetInfo from "./BudgetInfo";

const Budget = ({ budget, categories }) => {

  return (
    <li className="bg-white rounded-md shadow-lg p-4 sm:p-6 mb-6">
      <BudgetInfo budget={budget} categories={categories} />

      <LatestSpending budget={budget} />
    </li>
  )
}

export default Budget;