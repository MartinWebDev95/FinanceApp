import { fetchRecurringBills } from "@/app/lib/data";
import { recurringBillsDateFormatter } from "@/app/lib/utils";

const Table = async ({ query }) => {

  const recurringBills = await fetchRecurringBills({ query });

  return (
    <table className="w-full table-auto">
      <thead className="text-left">
        <tr className="text-gray-500 text-xs">
          <th className="pb-4">
            Bill Title
          </th>
          <th className="pb-4">
            Due Date
          </th>
          <th className="pb-4">
            Amount
          </th>
        </tr>
      </thead>

      <tbody>
        {recurringBills.map(bill => (
          <tr key={bill.id} className="font-bold text-neutral-900 border-t border-gray-200">
            <td className="flex items-center gap-2 py-4 text-xs md:text-base">
              <img src="./assets/Logo-1.jpg" alt={bill.name} className="w-8 h-8 rounded-full" />
              {bill.name}
            </td>
            <td 
              className="font-normal text-gray-500 text-xs" 
              style={{ color: recurringBillsDateFormatter({ date: bill.date }).color }}
            >
              <span className="flex items-center gap-1">
                {recurringBillsDateFormatter({ date: bill.date }).formattedDate}
                {recurringBillsDateFormatter({ date: bill.date }).icon}
              </span>
            </td>
            <td className="text-xs md:text-base">${Math.abs(bill.amount)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table;