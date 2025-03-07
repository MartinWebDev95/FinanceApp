import { useActionState } from "react";
import CustomSelect from "../pots/CustomSelect";
import { createNewTransaction } from "@/app/lib/actions";

const AddTransactionModal = ({ isOpened, setIsOpened, categories }) => {

  const [errorMessage, formAction] = useActionState(createNewTransaction, undefined); 

  const handleCloseModal = (e) => {
    if(e.target.ariaModal){
      setIsOpened(false);
    }

    return;
  }

  return (
    <dialog 
      id="addTransactionDialog" 
      aria-modal 
      className={`absolute top-0 left-0 w-full h-screen bg-black/70 ${isOpened ? 'grid place-items-center' : 'hidden'} z-10`} 
      onClick={handleCloseModal}
    >
      <form action={formAction} className="bg-white text-gray-600 p-6 rounded-md w-96 shadow-xl">
        <fieldset>
          <legend className="mb-2 text-neutral-900 font-bold text-2xl">
            Add New Transaction
          </legend>

          <div className="mb-3">
            <label htmlFor="transactionName">Transaction Name</label>
            <input 
              type="text" 
              name="transactionName" 
              id="transactionName" 
              placeholder="e.g. Urban Services Hub" 
              className="border border-gray-400 rounded-md block mt-1 py-1 px-2 w-full" 
            />
          </div>

          <div className="mb-3">
            <label htmlFor="transactionDate">Transaction Date</label>
            <input 
              type="date" 
              name="transactionDate" 
              id="transactionDate" 
              placeholder="Pick a date" 
              className="border border-gray-400 rounded-md block mt-1 py-1 px-2 w-full" 
            />
          </div>

          <div className="mb-3">
            <label htmlFor="transactionAmount">Amount</label>
            <input 
              type="number" 
              name="transactionAmount" 
              id="transactionAmount" 
              step="any"
              placeholder="$ e.g. 2000" 
              className="border border-gray-400 rounded-md block mt-1 py-1 px-2 w-full" 
            />
          </div>

          <div className="mb-3">
            <label htmlFor="transactionCategory">Category</label>
            <CustomSelect 
              data={categories} 
              placeholder="Select a category"
              name="transactionCategory"
            />
          </div>
          
          <div className="flex items-center gap-2">
            <label htmlFor="transactionRecurring">Recurring</label>
            <input 
              type="checkbox" 
              name="transactionRecurring" 
              id="transactionRecurring"  
            />
          </div>

        </fieldset>

        <button type="submit" className="w-full rounded-md bg-neutral-900 text-white font-bold mt-8 py-2 hover:bg-neutral-800 transition-all ease-in-out duration-200">
          Add New Transaction
        </button>
      </form>
    </dialog>
  )
}

export default AddTransactionModal;