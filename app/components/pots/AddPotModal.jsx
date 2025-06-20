import { themes } from "@/app/lib/utils";
import CustomSelect from "./CustomSelect";
import { useActionState } from "react";
import { createNewPot, editPot } from "@/app/lib/actions";
import useModal from "@/app/hooks/useModal";

const AddPotModal = ({ isOpened, setIsOpened, id, name, target, theme, edit = false }) => {

  const initialState = { errors: {} };
  
  const updatePot = editPot.bind(null, id);

  const [errorMessage, formAction, pending] = useActionState(edit ? updatePot : createNewPot, initialState);

  const { handleCloseModal } = useModal({ setIsOpened, isPending: pending, errorMessage })

  return (
    <dialog 
      id="addPotDialog" 
      aria-modal 
      className={`absolute top-0 left-0 w-full h-screen bg-black/70 ${isOpened ? 'grid place-items-center' : 'hidden'} z-10`} 
      onClick={handleCloseModal}
    >
      <form action={formAction} className="bg-white text-gray-600 p-6 mx-2 rounded-md w-80 sm:w-96 shadow-xl">
        <fieldset>
          <legend className="mb-2 text-neutral-900 font-bold text-2xl">
            { edit ? 'Edit Pot' : 'Add New Pot' }
          </legend>

          <p className="mb-4 text-sm w-full">
            {
              edit 
                ? 'If your saving targets change, feel free to update your pots.'
                : 'Choose a category to set a spending budget. These categories can help you monitor spending.'
            }
          </p>

          <div className="mb-3">
            <label htmlFor="potName">Pot Name</label>
            <input 
              className="border border-gray-400 rounded-md block mt-1 py-1 px-2 w-full" 
              type="text" 
              name="potName" 
              id="potName" 
              defaultValue={name}
              placeholder="e.g. Rainy Days" 
            />

            {errorMessage?.errors?.potName && (
              errorMessage.errors.potName.map((msg, index) => (
                <p key={index} className="text-red-500 text-sm">{msg}</p>
              ))
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="targetAmount">Target Amount</label>
            <input 
              className="border border-gray-400 rounded-md block mt-1 py-1 px-2 w-full" 
              type="number" 
              name="targetAmount" 
              id="targetAmount"
              defaultValue={target}
              placeholder="$ e.g. 2000" 
            />

            {errorMessage?.errors?.targetAmount && (
              errorMessage.errors.targetAmount.map((msg, index) => (
                <p key={index} className="text-red-500 text-sm">{msg}</p>
              ))
            )}
          </div>

          <div>
            <label htmlFor="theme">Theme</label>
            <CustomSelect 
              data={themes} 
              defaultValue={theme} 
              placeholder="Select a theme" 
              name="theme"
            />

            {errorMessage?.errors?.theme && (
              errorMessage.errors.theme.map((msg, index) => (
                <p key={index} className="text-red-500 text-sm">{msg}</p>
              ))
            )}
          </div>
        </fieldset>

        <button 
          type="submit" 
          aria-disabled={pending}
          className="w-full rounded-md bg-neutral-900 text-white font-bold mt-8 py-2 hover:bg-neutral-800 transition-all ease-in-out duration-200 aria-disabled:cursor-not-allowed aria-disabled:opacity-70"
        >
          { edit ? 'Save Changes' : 'Add New Pot' }
        </button>
      </form>
    </dialog>
  )
}

export default AddPotModal;