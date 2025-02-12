import { calculatePercentage } from "@/app/lib/utils";

const WithdrawModal = ({ isOpened, setIsOpened, name, total, target }) => {
  
  const handleCloseModal = (e) => {
    if(e.target.ariaModal){
      setIsOpened(false);
    }

    return;
  }

  return (
    <dialog 
      id="withdrawDialog" 
      aria-modal 
      className={`absolute top-0 left-0 w-full h-screen bg-black/70 ${isOpened ? 'grid place-items-center' : 'hidden'} z-10`} 
      onClick={handleCloseModal}
    >
      <form action="" method="dialog" className="bg-white text-gray-600 p-6 rounded-md w-96 shadow-xl">
        <fieldset>
          <legend className="mb-2 text-neutral-900 font-bold text-2xl">
            Withdraw from {name}
          </legend>

          <p className="text-sm w-full">
            Withdraw from your pot to put money back in your main balance. This will reduce the amount you have in this pot.
          </p>

          <div className="mt-6">
            <p className="w-full flex items-center justify-between">
              <span className="text-gray-500 font-bold">New Amount</span> 
              <span className="font-bold text-3xl">${total}</span>
            </p>
    
            {/* Custom Progress Bar */}
            <div className="w-full h-3 bg-gray-200 rounded-full mt-2">
              <div 
                className="h-3 rounded-full bg-red-600" 
                style={{
                  width: `${calculatePercentage({ total, target })}%` 
                }}
              /> 
            </div>
    
            <p className="w-full flex items-center justify-between text-gray-500 font-bold text-xs">
              <span className="text-red-500">{calculatePercentage({ total, target })}%</span>
              <span>Target of ${target}</span>
            </p>

            <div className="mt-3">
              <label htmlFor="newAmount">Amount to Withdraw</label>
              <input className="border border-gray-400 rounded-md block mt-1 py-1 px-2 w-full" type="number" name="newAmount" id="newAmount" placeholder="Enter amount" />
            </div>
          </div>
        </fieldset>

        <button type="submit" className="w-full rounded-md bg-neutral-900 text-white font-bold mt-8 py-2 hover:bg-neutral-800 transition-all ease-in-out duration-200">
          Confirm Withdrawal
        </button>
      </form>
    </dialog>
  )
}

export default WithdrawModal;