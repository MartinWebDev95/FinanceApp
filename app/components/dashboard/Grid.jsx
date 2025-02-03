const Grid = () => {
  return (
    <div className="mt-8 grid grid-cols-2 grid-rows-12 gap-4 h-screen">
      <div className="bg-white rounded-md shadow-lg flex justify-center items-center row-start-1 row-end-6 col-start-1 col-end-2">
        Pots
      </div>

      <div className="bg-white rounded-md shadow-lg flex justify-center items-center row-start-1 row-end-8 col-start-2 col-end-3">
        Budgets
      </div>

      <div className="bg-white rounded-md shadow-lg flex justify-center items-center row-start-6 row-end-13 col-start-1 col-end-2">
        Transactions
      </div>

      <div className="bg-white rounded-md shadow-lg flex justify-center items-center row-start-8 row-end-13 col-start-2 col-end-3">
        Recurring Bills
      </div>
    </div>
  )
}

export default Grid;