import { RecurringBillsIcon, sortBy } from "@/app/lib/utils";
import data from '@/app/lib/data.json';
import Table from "@/app/components/recurring-bills/Table";
import Search from "@/app/components/Search";
import Filter from "@/app/components/Filter";

export default function RecurringBillsPage(){
  return (
    <>
      <h1 className="text-3xl font-bold">Recurring Bills</h1>

      <div className="flex flex-col lg:flex-row lg:items-start gap-4 mt-8">
        <div className="w-full lg:w-1/4 flex flex-col md:flex-row lg:flex-col md:gap-4">
          <div className="bg-neutral-900 text-white p-4 rounded-md shadow-lg mb-4 md:mb-0 w-full min-h-full flex flex-col justify-center">
            <RecurringBillsIcon/>

            <div>
              <p className="mt-4 mb-2 font-bold text-lg">Total Bills</p>
              <p className="font-bold text-4xl">$1000000</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-md shadow-lg text-xs w-full h-full">
            <p className="text-neutral-900 mb-4 text-lg font-bold">Summary</p>
            <p className="pb-4 w-full border-b border-gray-200 flex items-center justify-between">
              <span className="text-gray-500">Paid Bills</span>
              <span>$1000000</span>
            </p>
            <p className="py-4 w-full border-b border-gray-200 flex items-center justify-between">
              <span className="text-gray-500">Total Upcoming</span>
              <span>$1000000</span>
            </p>
            <p className="pt-4 w-full flex items-center justify-between">
              <span className="text-gray-500">Due Soon</span>
              <span className="text-red-600">$1000000</span>
            </p>
          </div>
        </div>

        <div className="w-full lg:w-3/4 h-full bg-white p-8 rounded-md shadow-lg">
          <div className="w-full flex justify-between items-center pb-8 gap-4 md:gap-0">
            <Search placeholder="Search bills"/>

            <div className="w-fit md:w-56 flex items-center gap-4">
              <p className="hidden md:block text-gray-500 text-sm whitespace-nowrap">Sort by</p>
              <Filter options={sortBy} type='sort' />
            </div>
          </div>
          
          <Table data={data} />
        </div>
      </div>
    </>
  )
}