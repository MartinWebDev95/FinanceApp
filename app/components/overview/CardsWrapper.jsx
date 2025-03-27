import React from 'react'
import Cards from './Cards'
import { fetchFinancesData } from '@/app/lib/data';

const CardsWrapper = async () => {

  const { currentBalance, income, expenses } = await fetchFinancesData();
  
  return (
    <div className="mt-6 w-full flex flex-col md:flex-row items-center justify-between gap-6">
      <Cards title='Current Balance' data={currentBalance} main />
      <Cards title='Income' data={income} />
      <Cards title='Expenses' data={expenses} />
    </div>
  )
}

export default CardsWrapper;