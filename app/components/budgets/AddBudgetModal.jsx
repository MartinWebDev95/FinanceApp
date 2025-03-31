import { themes } from "@/app/lib/utils";
import CustomSelect from "../pots/CustomSelect";
import { useActionState } from "react";
import { createNewBudget, editBudget } from "@/app/lib/actions";
import useModal from "@/app/hooks/useModal";

const AddBudgetModal = ({ isOpened, setIsOpened, budget, categories, edit = false }) => {

  const updateBudget = editBudget.bind(null, budget?.id);

  const initialState = { errors: {} };

  const [errorMessage, formAction, pending] = useActionState(
    edit ? updateBudget : createNewBudget, 
    initialState
  );

  const { handleCloseModal } = useModal({ setIsOpened, isPending: pending, errorMessage })

  return (
    <dialog 
      id="addBudgetDialog" 
      aria-modal 
      className={`absolute top-0 left-0 w-full h-screen bg-black/70 ${isOpened ? 'grid place-items-center' : 'hidden'} z-10`} 
      onClick={handleCloseModal}
    >
      <form action={formAction} className="bg-white text-gray-600 p-6 rounded-md w-96 shadow-xl">
        <fieldset>
          <legend className="mb-2 text-neutral-900 font-bold text-2xl">
            { edit ? 'Edit Budget' : 'Add New Budget' }
          </legend>

          <p className="mb-4 text-sm w-full">
            { edit 
              ? 'As your budgets change, feel free to update your spending limits.' 
              : 'Choose a category to set a spending budget. These categories can help you monitor spending.' }
          </p>

          <div className="mb-3">
            <label htmlFor="budgetCategory">Category</label>

            <CustomSelect 
              data={categories}
              defaultValue={budget?.value} 
              placeholder="Select a category" 
              name="budgetCategory"
            />

            {errorMessage?.errors?.budgetCategory && (
              errorMessage.errors.budgetCategory.map((msg, index) => (
                <p key={index} className="text-red-500 text-xs mt-1">{msg}</p>
              ))              
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="budgetMaximumAmount">Maximum Spend</label>

            <input 
              className="border border-gray-400 rounded-md block mt-1 py-1 px-2 w-full" type="number" 
              defaultValue={budget?.maximum}
              name="budgetMaximumAmount" 
              id="budgetMaximumAmount" 
              placeholder="$ e.g. 2000" 
            />

            {errorMessage?.errors?.budgetMaximumAmount && (
              errorMessage.errors.budgetMaximumAmount.map((msg, index) => (
                <p key={index} className="text-red-500 text-xs mt-1">{msg}</p>
              ))              
            )}
          </div>

          <div>
            <label htmlFor="budgetTheme">Theme</label>
            
            <CustomSelect 
              data={themes} 
              defaultValue={budget?.theme}
              placeholder="Select a theme" 
              name="budgetTheme"
            />

            {errorMessage?.errors?.budgetTheme && (
              errorMessage.errors.budgetTheme.map((msg, index) => (
                <p key={index} className="text-red-500 text-xs mt-1">{msg}</p>
              ))              
            )}
          </div>
        </fieldset>

        <button 
          type="submit" 
          aria-disabled={pending}
          className="w-full rounded-md bg-neutral-900 text-white font-bold mt-8 py-2 hover:bg-neutral-800 transition-all ease-in-out duration-200 aria-disabled:cursor-not-allowed aria-disabled:opacity-70"
        >
          { edit ? 'Edit Budget' : 'Add New Budget' }
        </button>
      </form>
    </dialog>
  )
}

export default AddBudgetModal;