import { fetchBillsSummary } from "@/app/lib/data";
import { RecurringBillsIcon } from "@/app/lib/utils";

const Summary = async () => {

  const { totalBills, paidBills, upcomingBills, dueSoon } = await fetchBillsSummary();

  return (
    <div className="w-full lg:w-1/4 flex flex-col md:flex-row lg:flex-col md:gap-4">
      <div className="bg-neutral-900 text-white p-4 rounded-md shadow-lg mb-4 md:mb-0 w-full min-h-full flex flex-col justify-center">
        <RecurringBillsIcon/>

        <div>
          <p className="mt-4 mb-2 font-bold text-lg">Total Bills</p>
          <p className="font-bold text-4xl">${Math.abs(totalBills.sum)}</p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-md shadow-lg text-xs w-full h-full">
        <p className="text-neutral-900 mb-4 text-lg font-bold">Summary</p>
        <p className="pb-4 w-full border-b border-gray-200 flex items-center justify-between">
          <span className="text-gray-500">Paid Bills</span>
          <span>${Math.abs(paidBills.sum)}</span>
        </p>
        <p className="py-4 w-full border-b border-gray-200 flex items-center justify-between">
          <span className="text-gray-500">Total Upcoming</span>
          <span>${Math.abs(upcomingBills.sum)}</span>
        </p>
        <p className="pt-4 w-full flex items-center justify-between">
          <span className="text-gray-500">Due Soon</span>
          <span className="text-red-600">${Math.abs(dueSoon.sum)}</span>
        </p>
      </div>
    </div>
  )
}

export default Summary