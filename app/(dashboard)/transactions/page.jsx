import Filter from "@/app/components/Filter";
import { BtnAddNewTransaction } from "@/app/components/pots/buttons";
import Search from "@/app/components/Search";
import { TransactionsTableSkeleton } from "@/app/components/skeletons";
import ListOfPages from "@/app/components/transactions/ListOfPages";
import Table from "@/app/components/transactions/Table";
import { fetchCategories, fetchTransactionsPages } from "@/app/lib/data";
import { sortBy } from "@/app/lib/utils";
import { Suspense } from "react";

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Finance App | Transactions',
};

export default async function TransactionsPage({ searchParams }){

  const query = await searchParams;

  const data = await Promise.all([fetchCategories(), fetchTransactionsPages({ query })])

  return (
    <>
      <div className="flex items-center justify-between flex-col sm:flex-row gap-4 sm:gap-0">
        <h1 className="text-3xl font-bold">Transactions</h1>
        <BtnAddNewTransaction categories={data[0]} />
      </div>

      <div className="mt-8 w-full bg-white py-8 px-4 sm:px-6 md:px-8 rounded-md shadow-lg">
        <div className="w-full flex flex-row md:flex-col lg:flex-row justify-between items-center pb-8 gap-4">
          <Search placeholder="Search transactions"/>

          <div className="flex items-center gap-3">
            <div className="w-fit md:w-56 flex items-center gap-4">
              <p className="hidden md:block text-gray-500 text-sm whitespace-nowrap">
                Sort by
              </p>
              <Filter options={sortBy} type="sort" />
            </div>

            <div className="w-fit md:w-72 flex items-center gap-4">
              <p className="hidden md:block text-gray-500 text-sm whitespace-nowrap">
                Filter by Category
              </p>
              <Filter options={data[0]} type="category" />
            </div>
          </div>
        </div>

        <Suspense fallback={<TransactionsTableSkeleton />}>
          <Table query={query} />
        </Suspense>

        <ListOfPages numberOfPages={data[1]}/>
      </div>
    </>
  )
}