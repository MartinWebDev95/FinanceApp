export const CardsWrapperSkeleton = () => {
  return (
    <div className="mt-6 w-full flex flex-col md:flex-row items-center justify-between gap-6">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="animate-pulse bg-white rounded-md shadow-lg px-6 py-8 w-full">
          <div className="animate-pulse bg-slate-300 w-20 h-3 mb-3"></div>
          <div className="animate-pulse bg-slate-300 w-40 h-5"></div>
        </div>
      ))}
    </div>
  )
}

export const PotsSummarySkeleton = () => {
  return (
    <div className="break-inside-avoid p-6 mb-6 bg-white rounded-md shadow-lg w-full">
      <div className="w-full flex items-center justify-between">
        <div className="rounded-md animate-pulse w-16 h-4 bg-slate-200"></div>
        <div className="rounded-md animate-pulse w-20 h-4 bg-slate-200"></div>
      </div>

      <div className="flex flex-col md:flex-row items-center mt-4 gap-4 w-full h-full">
        <div className="animate-pulse w-full md:w-1/2 rounded-md bg-slate-200 h-28"></div>

        <div className="w-full md:w-1/2 grid grid-cols-2 grid-rows-2 gap-y-2 flex-1">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-16 flex items-center w-full">
              <div className="animate-pulse h-12 w-1 rounded-md bg-slate-200"/>

              <div className="ml-2">
                <p className="animate-pulse bg-slate-200 w-14 h-2 mb-2"></p>
                <p className="animate-pulse bg-slate-200 w-14 h-2"></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export const BudgetsChartSkeleton = () => {
  return (
    <div className="break-inside-avoid p-6 mb-6 bg-white rounded-md shadow-lg">
      <div className="w-full flex items-center justify-between">
        <div className="rounded-md animate-pulse w-16 h-4 bg-slate-200"></div>
        <div className="rounded-md animate-pulse w-20 h-4 bg-slate-200"></div>
      </div>

      <div className="flex flex-col md:flex-row lg:flex-col items-center gap-2">
        <div className="w-full md:w-1/2 lg:w-full my-8 flex items-center flex-col">
          <div className="animate-pulse bg-slate-200 w-64 h-64 rounded-full"></div>
        </div>

        <div className="w-full md:w-1/2 lg:w-full">
          <ul>
            {[...Array(3)].map((_, i) => (
              <li key={i} className="py-5 border-b relative">
                <div className="animate-pulse bg-slate-200 absolute top-2 bottom-2 left-0 w-2 rounded-full" />

                <div className="flex items-center justify-between pl-4">
                  <div className="animate-pulse bg-slate-200 w-16 h-3"></div>
                  <div className="animate-pulse bg-slate-200 w-16 h-3"></div>               
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export const LatestTransactionsSkeleton = () => {
  return (
    <div className="break-inside-avoid p-6 mb-6 bg-white rounded-md shadow-lg w-full">
      <div className="w-full flex items-center justify-between">
        <div className="rounded-md animate-pulse w-16 h-4 bg-slate-200"></div>
        <div className="rounded-md animate-pulse w-20 h-4 bg-slate-200"></div>
      </div>

      <ul className="mt-2">
        {[...Array(4)].map((_, i) => (
          <li key={i} className="w-full flex items-center justify-between border-b py-3">
            <div className="flex items-center gap-2">
              <div className="animate-pulse rounded-full bg-slate-200 w-9 h-9 "></div>
              <div className="animate-pulse w-32 h-4 bg-slate-200"></div>
            </div>

            <div className="flex flex-col items-end gap-1">
              <div className="animate-pulse w-14 h-3 bg-slate-200"></div>
              <div className="animate-pulse w-20 h-3 bg-slate-200"></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const RecurringBillsSummarySkeleton = () => {
  return (
    <div className="break-inside-avoid p-6 mb-6 bg-white rounded-md shadow-lg">
      <div className="w-full flex items-center justify-between">
        <div className="rounded-md animate-pulse w-16 h-4 bg-slate-200"></div>
        <div className="rounded-md animate-pulse w-20 h-4 bg-slate-200"></div>
      </div>

      <ul className="w-full mt-4">
        {[...Array(3)].map((_, i) => (
          <li key={i} className="animate-pulse rounded-md py-5 w-full flex items-center justify-between bg-slate-200 pr-3 relative before:absolute before:rounded-l-md before:top-0 before:bottom-0 before:w-2 before:h-full before:bg-slate-300 before:animate-pulse mb-2">
            <div className="rounded-md animate-pulse w-16 h-4 bg-slate-300 ml-4"></div>
            <div className="rounded-md animate-pulse w-16 h-4 bg-slate-300"></div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const TransactionsTableSkeleton = () => {
  return (
    <table className="w-full table-auto bg-white">
      <thead className="text-left">
        <tr>
          <th>
            <div className="animate-pulse bg-slate-200 w-16 h-3 mb-2"></div>
          </th>
          <th>
            <div className="animate-pulse bg-slate-200 w-16 h-3 mb-2"></div>
          </th>
          <th>
            <div className="animate-pulse bg-slate-200 w-16 h-3 mb-2"></div>
          </th>
          <th>
            <div className="animate-pulse bg-slate-200 w-16 h-3 mb-2"></div>
          </th>
        </tr>
      </thead>

      <tbody>
        {[...Array(10)].map((_, i) => (
          <tr key={i} className="border-t border-gray-200 w-full">
            <td className="flex items-center gap-4 py-4">
              <div className="animate-pulse bg-slate-200 w-9 h-9 rounded-full"></div>
              <div className="animate-pulse bg-slate-200 w-20 h-3"></div>
            </td>
            <td>
              <div className="animate-pulse bg-slate-200 w-20 h-3"></div>
            </td>
            <td>
              <div className="animate-pulse bg-slate-200 w-20 h-3"></div>
            </td>
            <td>
              <div className="animate-pulse bg-slate-200 w-20 h-3"></div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export const PotSkeleton = () => {
  return (
    <div className="grid grid-cols-auto-fill gap-4 mt-8">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="bg-white rounded-md p-4 shadow-lg">
          <div className="flex items-center justify-between relative">
            <div className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full animate-pulse bg-slate-200"></div>
              <div className="w-24 h-4 animate-pulse bg-slate-200"></div> 
            </div>

            <div className="w-1 h-5 animate-pulse bg-slate-200"></div>
          </div>

          <div className="mt-8">
            <div className="w-full flex items-center justify-between">
              <div className="animate-pulse w-16 h-3 bg-slate-200"></div> 
              <div className="animate-pulse w-16 h-4 bg-slate-200"></div>
            </div>

            <div className="w-full h-3 bg-slate-200 rounded-full mt-2 animate-pulse">
              <div className="w-24 h-3 rounded-full bg-slate-300 animate-pulse" /> 
            </div>

            <div className="w-full flex items-center justify-between mt-1">
              <div className="w-12 h-2 bg-slate-200 animate-pulse"></div>
              <div className="w-20 h-2 bg-slate-200 animate-pulse"></div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="w-full h-12 bg-slate-200 animate-pulse rounded-md"></div>
            <div className="w-full h-12 bg-slate-200 animate-pulse rounded-md"></div>
          </div>
        </div>
      ))}
    </div>
  )
}

export const RecurringBillsTableSkeleton = () => {
  return (
    <table className="w-full table-auto bg-white">
      <thead className="text-left">
        <tr>
          <th>
            <div className="animate-pulse bg-slate-200 w-16 h-3 mb-2"></div>
          </th>
          <th>
            <div className="animate-pulse bg-slate-200 w-16 h-3 mb-2"></div>
          </th>
          <th>
            <div className="animate-pulse bg-slate-200 w-16 h-3 mb-2"></div>
          </th>
        </tr>
      </thead>

      <tbody>
        {[...Array(10)].map((_, i) => (
          <tr key={i} className="border-t border-gray-200 w-full">
            <td className="flex items-center gap-4 py-4">
              <div className="animate-pulse bg-slate-200 w-9 h-9 rounded-full"></div>
              <div className="animate-pulse bg-slate-200 w-20 h-3"></div>
            </td>
            <td>
              <div className="animate-pulse bg-slate-200 w-16 h-3"></div>
            </td>
            <td>
              <div className="animate-pulse bg-slate-200 w-14 h-3"></div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export const SummarySkeleton = () => {
  return (
    <div className="w-full lg:w-1/4 flex flex-col md:flex-row lg:flex-col md:gap-4">
      <div className="p-4 rounded-md shadow-lg mb-4 md:mb-0 w-full min-h-full flex flex-col justify-center bg-white">
        <div className="w-5 h-5 animate-pulse bg-slate-200"></div>

        <div>
          <div className="mt-4 mb-2 animate-pulse bg-slate-200 w-16 h-3"></div>
          <div className="animate-pulse bg-slate-200 w-28 h-6"></div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-md shadow-lg text-xs w-full h-full">
        <div className="mb-4 animate-pulse w-20 h-4 bg-slate-200"></div>
        <div className="pb-4 w-full border-b border-gray-200 flex items-center justify-between">
          <div className="animate-pulse w-16 h-2 bg-slate-200"></div>
          <div className="animate-pulse w-14 h-2 bg-slate-200"></div>
        </div>
        <div className="py-4 w-full border-b border-gray-200 flex items-center justify-between">
          <div className="animate-pulse w-16 h-2 bg-slate-200"></div>
          <div className="animate-pulse w-14 h-2 bg-slate-200"></div>
        </div>
        <div className="pt-4 w-full flex items-center justify-between">
          <div className="animate-pulse w-16 h-2 bg-slate-200"></div>
          <div className="animate-pulse w-14 h-2 bg-slate-200"></div>
        </div>
      </div>
    </div>
  )
}

export const BudgetSkeleton = () => {
  return (
    <ul className="w-full lg:w-3/5">
      {[...Array(4)].map((_, i) => (
        <li key={i} className="bg-white rounded-md shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between relative">
            <div className="flex items-center gap-2.5">
              <div className="animate-pulse bg-slate-200 w-4 h-4 rounded-full"></div>
              
              <div className="animate-pulse bg-slate-200 w-32 h-4"></div> 
            </div>
    
            <div className="animate-pulse bg-slate-200 w-1 h-5"></div>
          </div>

          <div className="animate-pulse bg-slate-200 w-20 h-3 mt-5"></div>
          
          {/* Custom Progress Bar */}
          <div className="animate-pulse w-full h-3 bg-slate-200 rounded-full mt-2">
            <div className="animate-pulse bg-slate-300 w-28 h-3 rounded-full" /> 
          </div>
    
          <div className="flex items-center justify-between mt-4">
            <div className="relative">
              <div className="animate-pulse bg-slate-200 absolute left-0 top-0 h-full w-1 rounded-full" />
              <div className="ml-3 animate-pulse bg-slate-200 w-10 h-2 mb-1"></div>
              <div className="ml-3 animate-pulse bg-slate-200 w-14 h-3"></div>
            </div>
            
            <div className="relative">
            <div className="animate-pulse bg-slate-200 absolute left-0 top-0 h-full w-1 rounded-full" />
              <div className="ml-3 animate-pulse bg-slate-200 w-10 h-2 mb-1"></div>
              <div className="ml-3 animate-pulse bg-slate-200 w-14 h-3"></div>
            </div>
          </div>

          <div className="animate-pulse bg-slate-200 p-4 mt-4 rounded-md">
            <div className="w-full flex items-center justify-between">
              <div className="animate-pulse bg-slate-300 w-28 h-4"></div>
              
              <div className="animate-pulse bg-slate-300 w-16 h-3"></div>
            </div>

            <ul className="mt-2">
              {[...Array(3)].map((_, i) => (
                <li key={i} className="flex items-center justify-between border-b border-neutral-300 py-2">
                  <div className="flex items-center gap-2">
                    <div className="animate-pulse bg-slate-300 rounded-full w-9 h-9" />
                    <div className="animate-pulse bg-slate-300 w-28 h-4"></div>
                  </div>

                  <div className="text-right">
                    <div className="animate-pulse bg-slate-300 w-14 h-3 mb-1"></div>
                    <div className="animate-pulse bg-slate-300 w-16 h-2"></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  )
}

export const BudgetSummarySkeleton = () => {
  return (
    <div className="w-full lg:w-2/5 bg-white rounded-md shadow-lg p-4">
      <div className="animate-pulse bg-slate-200 w-32 h-4"></div>
      <ul className="mt-4">
        {[...Array(4)].map((_, i) => (
          <li key={i} className="py-4 border-b relative">
            <div className="absolute top-2 bottom-2 left-0 w-2 rounded-full bg-slate-200 animate-pulse" />

            <div className="flex items-center justify-between pl-4">
              <div className="animate-pulse bg-slate-200 w-16 h-3"></div>
              <div className="animate-pulse bg-slate-200 w-24 h-3"></div>               
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}