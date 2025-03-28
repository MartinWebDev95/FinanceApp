import Link from 'next/link'

const EmptyBills = () => {
  return (
    <div>
      <p className='text-center my-6 text-slate-500'>
        There are not bills created at the moment, go to Transactions page to create them.
      </p>

      <Link 
        href="/transactions" 
        className="flex items-center bg-neutral-900 text-white font-bold rounded-md shadow-lg p-2 hover:bg-neutral-800 transition-all ease-in-out duration-200 w-fit mx-auto"
      >
        Go to Transactions
      </Link>
    </div>
  )
}

export default EmptyBills