const Grid = () => {
  return (
    <div className="mt-8 grid grid-cols-1 grid-rows-24 lg:grid-cols-2 lg:grid-rows-12 gap-4 h-screen">
      <div className="bg-white rounded-md shadow-lg flex justify-center items-center row-start-1 row-end-6 lg:col-start-1 lg:col-end-2">
        Pots
      </div>

      <div className="bg-white rounded-md shadow-lg flex justify-center items-center row-start-12 row-end-19 lg:row-start-1 lg:row-end-8 lg:col-start-2 lg:col-end-3">
        Budgets
      </div>

      <div className="bg-white rounded-md shadow-lg flex justify-center items-center row-start-6 row-end-12 lg:row-end-13 lg:col-start-1 lg:col-end-2">
        Transactions
      </div>

      <div className="bg-white rounded-md shadow-lg flex justify-center items-center row-start-19 row-end-25 lg:row-start-8 lg:row-end-13 lg:col-start-2 lg:col-end-3">
        Recurring Bills
      </div>
    </div>
  )
}

export default Grid;