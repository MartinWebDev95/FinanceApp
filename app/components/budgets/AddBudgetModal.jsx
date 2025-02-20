import { categories, themes } from "@/app/lib/utils";
import CustomSelect from "../pots/CustomSelect";

const AddBudgetModal = ({ isOpened, setIsOpened }) => {

  const handleCloseModal = (e) => {
    if(e.target.ariaModal){
      setIsOpened(false);
    }

    return;
  }

  return (
    <dialog 
      id="addBudgetDialog" 
      aria-modal 
      className={`absolute top-0 left-0 w-full h-screen bg-black/70 ${isOpened ? 'grid place-items-center' : 'hidden'} z-10`} 
      onClick={handleCloseModal}
    >
      <form action="" method="dialog" className="bg-white text-gray-600 p-6 rounded-md w-96 shadow-xl">
        <fieldset>
          <legend className="mb-2 text-neutral-900 font-bold text-2xl">Add New Budget</legend>

          <p className="mb-4 text-sm w-full">
            Choose a category to set a spending budget. These categories can help you monitor spending.
          </p>

          <div className="mb-3">
            <label htmlFor="potName">Category</label>
            <CustomSelect data={categories} placeholder="Select a category" />
          </div>

          <div className="mb-3">
            <label htmlFor="targetAmount">Maximum Spend</label>
            <input className="border border-gray-400 rounded-md block mt-1 py-1 px-2 w-full" type="number" name="targetAmount" id="targetAmount" placeholder="$ e.g. 2000" />
          </div>

          <div>
            <label htmlFor="targetTheme">Theme</label>
            <CustomSelect data={themes} placeholder="Select a theme" />
          </div>
        </fieldset>

        <button type="submit" className="w-full rounded-md bg-neutral-900 text-white font-bold mt-8 py-2 hover:bg-neutral-800 transition-all ease-in-out duration-200">
          Add New Budget
        </button>
      </form>
    </dialog>
  )
}

export default AddBudgetModal