const DeleteBudgetModal = ({ isOpened, setIsOpened, budget }) => {
  const handleCloseModal = (e) => {
    if(e.target.ariaModal){
      setIsOpened(false);
    }

    return;
  }

  return (
    <dialog id="deletePotDialog" aria-modal className={`absolute top-0 left-0 w-full h-screen bg-black/70 ${isOpened ? 'grid place-items-center' : 'hidden'} z-10`} onClick={handleCloseModal}>
      <form action='' className="bg-white text-gray-600 p-6 rounded-md w-96 shadow-xl">
        <fieldset>
          <legend className="mb-2 text-neutral-900 font-bold text-2xl">
            Delete '{`${budget.label}`}'?
          </legend>

          <p className="mb-4 text-sm w-full">
            Are you sure you want to delete this budget? This action cannot be reversed, and all the data inside it will be removed forever.
          </p>

          <div className="mt-4 w-full flex items-center justify-end gap-4">
            <button 
              type="submit" 
              className="w-fit rounded-md bg-red-600 text-white font-bold p-3 hover:bg-red-500 transition-all ease-in-out duration-200" 
            >
              Yes, Confirm Deletion
            </button>

            <button 
              type="button" 
              className="w-fit rounded-md bg-gray-200 text-neutral-900 font-bold p-3 hover:bg-gray-300 transition-all ease-in-out duration-200"
              onClick={() => setIsOpened(false)}  
            >
              Close
            </button>
          </div>
        </fieldset>
      </form>
    </dialog>
  )
}

export default DeleteBudgetModal;