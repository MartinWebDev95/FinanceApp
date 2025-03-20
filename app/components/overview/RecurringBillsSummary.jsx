import { fetchBillsSummary } from '@/app/lib/data';
import { ArrowDetails } from '@/app/lib/utils';
import Link from 'next/link';

const RecurringBillsSummary = async () => {
  
  const { paidBills, upcomingBills, dueSoon } = await fetchBillsSummary();

  return (
    <div className="break-inside-avoid p-6 mb-6 bg-white rounded-md shadow-lg">
      <div className="w-full flex items-center justify-between">
        <h2 className="text-neutral-900 text-2xl font-bold">Recurring Bills</h2>
        <Link href='/recurring-bills' className="flex items-center gap-2 group text-slate-600">
          <span>See details</span>
          <ArrowDetails />
        </Link>
      </div>

      <div className="w-full mt-4">
        <p className="rounded-md py-4 w-full flex items-center justify-between bg-gray-100 pr-3 relative before:absolute before:rounded-l-md before:top-0 before:bottom-0 before:w-2 before:h-full before:bg-green-300 mb-2">
          <span className="text-gray-500 pl-3">Paid Bills</span>
          <span className="font-bold">${Math.abs(paidBills.sum)}</span>
        </p>
        <p className="rounded-md py-4 w-full flex items-center justify-between bg-gray-100 pr-3 relative before:absolute before:rounded-l-md before:top-0 before:bottom-0 before:w-2 before:h-full before:bg-amber-300 mb-2">
          <span className="text-gray-500 pl-3">Total Upcoming</span>
          <span className="font-bold">${Math.abs(upcomingBills.sum)}</span>
        </p>
        <p className="rounded-md py-4 w-full flex items-center justify-between bg-gray-100 pr-3 relative before:absolute before:rounded-l-md before:top-0 before:bottom-0 before:w-2 before:h-full before:bg-red-400">
          <span className="text-gray-500 pl-3">Due Soon</span>
          <span className="text-red-600 font-bold">${Math.abs(dueSoon.sum)}</span>
        </p>
      </div>
    </div>
  )
}

export default RecurringBillsSummary;