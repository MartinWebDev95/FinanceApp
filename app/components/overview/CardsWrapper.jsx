import React from 'react'
import Cards from './Cards'
import { fetchFinancesData } from '@/app/lib/data';

const CardsWrapper = async () => {

  const { currentBalance, income, expenses } = await fetchFinancesData();
  
  return (
    <div className="mt-6 w-full flex flex-col md:flex-row items-center justify-between gap-6">
      <Cards title='Current Balance' data={currentBalance.sum} main />
      <Cards title='Income' data={income.sum} />
      <Cards title='Expenses' data={Math.abs(expenses.sum).toFixed(2)} />
    </div>
  )
}

export default CardsWrapper;