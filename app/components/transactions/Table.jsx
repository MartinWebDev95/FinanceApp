const Table = ({ data }) => {
  return (
    <table className="w-full table-auto">
      <thead className="text-left">
        <tr className="text-gray-500 text-xs">
          <th className="pb-4">
            Recipient/Sender
          </th>
          <th className="pb-4">
            Category
          </th>
          <th className="pb-4">
            Transaction Date
          </th>
          <th className="pb-4">
            Amount
          </th>
        </tr>
      </thead>

      <tbody>
        {data.map(transaction => (
          <tr key={transaction.id} className="font-bold text-neutral-900 border-t border-gray-200">
            <td className="flex items-center gap-2 py-4 text-xs md:text-base">
              <img src={transaction.avatar} alt={transaction.name} className="w-8 h-8 rounded-full" />
              {transaction.name}
            </td>
            <td className="font-normal text-gray-500 text-xs">
              {transaction.label}
            </td>
            <td className="font-normal text-gray-500 text-xs">
              {new Date(transaction.date).toLocaleDateString()}
            </td>
            {transaction.amount > 0 ? (
              <td className="text-xs md:text-base text-green-600">
                +${transaction.amount}
              </td>             
            ) : (
              <td className="text-xs md:text-base">
                -${Math.abs(transaction.amount)}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table;