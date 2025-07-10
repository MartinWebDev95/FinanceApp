import { useActionState, useRef } from "react";
import CustomSelect from "../pots/CustomSelect";
import { createNewTransaction } from "@/app/lib/actions";
import useModal from "@/app/hooks/useModal";

const AddTransactionModal = ({ isOpened, setIsOpened, categories }) => {

  const imagePreview = useRef(null);

  const initialState = { errors: {} };

  const [errorMessage, formAction, pending] = useActionState(createNewTransaction, initialState);
  
  const { handleCloseModal } = useModal({ setIsOpened, isPending: pending, errorMessage })

  const updateSelectedImage = (e) => {
    const curFiles = e.target.files;

    if (curFiles.length > 0) {
      const file = curFiles[0];

      imagePreview.current.src = URL.createObjectURL(file);
      imagePreview.current.alt = file.name;
    }
  }

  return (
    <dialog 
      id="addTransactionDialog" 
      aria-modal 
      className={`absolute top-0 left-0 w-full h-screen bg-black/70 ${isOpened ? 'grid place-items-center' : 'hidden'} z-10 py-10`} 
      onClick={handleCloseModal}
    >
      <form action={formAction} className="bg-white text-gray-600 p-6 rounded-md h-full -translate-y-6 md:-translate-y-8 lg:translate-y-0 w-80 sm:w-96 shadow-xl overflow-y-scroll">
        <fieldset>
          <legend className="mb-2 text-neutral-900 font-bold text-2xl">
            Add New Transaction
          </legend>

          <div className="mb-3">
            <div className="flex items-end gap-2">
              <div>
                <label htmlFor="transactionAvatar">Avatar</label>
                <input 
                  type="file" 
                  name="transactionAvatar" 
                  id="transactionAvatar" 
                  accept="image/png, image/jpeg, image/jpg"
                  aria-label="Upload an avatar for the transaction"
                  className="border border-gray-400 rounded-md mt-1 py-1 px-2 w-full" 
                  onChange={updateSelectedImage}
                />
              </div>

              <img 
                ref={imagePreview} 
                src="/assets/previewImage.png" 
                className='w-10 h-10 lg:w-12 lg:h-12 rounded-full' 
                alt="Preview" 
              />
            </div>

            {errorMessage?.errors?.transactionAvatar && (
              errorMessage.errors.transactionAvatar.map((msg, index) => (
                <p key={index} className="text-red-500 text-sm">{msg}</p>
              ))
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="transactionName">Transaction Name</label>
            <input 
              type="text" 
              name="transactionName" 
              id="transactionName" 
              placeholder="e.g. Urban Services Hub" 
              className="border border-gray-400 rounded-md block mt-1 py-1 px-2 w-full" 
            />

            {errorMessage?.errors?.transactionName && (
              errorMessage.errors.transactionName.map((msg, index) => (
                <p key={index} className="text-red-500 text-sm">{msg}</p>
              ))
            )}
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

            {errorMessage?.errors?.transactionDate && (
              errorMessage.errors.transactionDate.map((msg, index) => (
                <p key={index} className="text-red-500 text-sm">{msg.invalid_type_error}</p>
              ))
            )}
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

            {errorMessage?.errors?.transactionAmount && (
              errorMessage.errors.transactionAmount.map((msg, index) => (
                <p key={index} className="text-red-500 text-sm">{msg}</p>
              ))
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="transactionCategory">Category</label>
            <CustomSelect 
              data={categories} 
              placeholder="Select a category"
              name="transactionCategory"
            />

            {errorMessage?.errors?.transactionCategory && (
              errorMessage.errors.transactionCategory.map((msg, index) => (
                <p key={index} className="text-red-500 text-sm">{msg}</p>
              ))
            )}
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

        <button 
          type="submit" 
          aria-disabled={pending}
          className="w-full rounded-md bg-neutral-900 text-white font-bold mt-8 py-2 hover:bg-neutral-800 transition-all ease-in-out duration-200 aria-disabled:cursor-not-allowed aria-disabled:opacity-70"
        >
          Add New Transaction
        </button>
      </form>
    </dialog>
  )
}

export default AddTransactionModal;