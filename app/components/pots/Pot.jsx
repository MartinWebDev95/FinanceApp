import { AddIcon, calculatePercentage, PotMenuIcon } from "@/app/lib/utils";

const Pot = ({ name, target, total, theme }) => {
  return (
    <div className="bg-white rounded-md p-4 shadow-lg">
      <div className="flex items-center justify-between">
        <h2 className="flex items-center gap-2.5">
          <span className="w-4 h-4 rounded-full" style={{backgroundColor: theme}}></span>
          <span className="text-xl font-bold">{name}</span> 
        </h2>

        <button type="button">
          <PotMenuIcon />
        </button>
      </div>

      <div className="mt-8">
        <p className="w-full flex items-center justify-between">
          <span className="text-gray-500 font-bold">Total Saved</span> 
          <span className="font-bold text-3xl">${total}</span>
        </p>

        {/* Custom Progress Bar */}
        <div className="w-full h-3 bg-gray-200 rounded-full mt-2">
          <div className="h-3 rounded-full" style={{ backgroundColor: theme, width: `${calculatePercentage({ total, target })}%` }}></div>
        </div>

        <p className="w-full flex items-center justify-between text-gray-500 font-bold text-xs">
          <span>{calculatePercentage({ total, target })}%</span>
          <span>Target of ${target}</span>
        </p>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button type="button" className="w-full flex items-center justify-center gap-1 bg-slate-200 rounded-md p-2 font-bold">
          <AddIcon />
          Add Money
        </button>

        <button type="button" className="w-full bg-slate-200 rounded-md p-2 font-bold">
          Withdraw
        </button>
      </div>
    </div>
  )
}

export default Pot;