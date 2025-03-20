import { sortBy } from "@/app/lib/utils";
import Table from "@/app/components/recurring-bills/Table";
import Search from "@/app/components/Search";
import Filter from "@/app/components/Filter";
import { RecurringBillsTableSkeleton, SummarySkeleton } from "@/app/components/skeletons";
import { Suspense } from "react";
import Summary from "@/app/components/recurring-bills/Summary";

export default async function RecurringBillsPage({ searchParams }){

  const query = await searchParams;

  return (
    <>
      <h1 className="text-3xl font-bold">Recurring Bills</h1>

      <div className="flex flex-col lg:flex-row lg:items-start gap-4 mt-8">
        <Suspense fallback={<SummarySkeleton />}>
          <Summary />
        </Suspense>

        <div className="w-full lg:w-3/4 h-full bg-white p-8 rounded-md shadow-lg">
          <div className="w-full flex justify-between items-center pb-8 gap-4">
            <Search placeholder="Search bills"/>

            <div className="w-fit md:w-56 flex items-center gap-4">
              <p className="hidden md:block text-gray-500 text-sm whitespace-nowrap">Sort by</p>
              <Filter options={sortBy} type='sort' />
            </div>
          </div>
 
          <Suspense fallback={<RecurringBillsTableSkeleton />}>
            <Table query={query} />
          </Suspense>
        </div>
      </div>
    </>
  )
}