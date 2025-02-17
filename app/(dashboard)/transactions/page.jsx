import Filter from "@/app/components/Filter";
import { BtnAddNewTransaction } from "@/app/components/pots/buttons";
import Search from "@/app/components/Search";
import Table from "@/app/components/transactions/Table";
import data from '@/app/lib/data';
import { categories, sortBy } from "@/app/lib/utils";

export default function TransactionsPage(){
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Transactions</h1>
        <BtnAddNewTransaction />
      </div>

      <div className="mt-8 w-full bg-white p-8 rounded-md shadow-lg">
        <div className="w-full flex flex-row md:flex-col lg:flex-row justify-between items-center pb-8 gap-4">
          <Search placeholder="Search transactions"/>

          <div className="flex items-center gap-3">
            <div className="w-fit md:w-56 flex items-center gap-4">
              <p className="hidden md:block text-gray-500 text-sm whitespace-nowrap">
                Sort by
              </p>
              <Filter options={sortBy} />
            </div>

            <div className="w-fit md:w-72 flex items-center gap-4">
              <p className="hidden md:block text-gray-500 text-sm whitespace-nowrap">
                Filter by Category
              </p>
              <Filter options={categories} />
            </div>
          </div>
        </div>

        <Table data={data.transactions}/>
      </div>
    </>
  )
}