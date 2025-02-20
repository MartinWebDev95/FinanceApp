const Menu = ({ isOpened, setIsOpenedMenu, setIsOpenedEditModal, setIsOpenedDeleteModal }) => {
  
  return (
    <>
      <div className={`absolute top-8 right-0 bg-white px-6 shadow-lg rounded-md ${isOpened ? 'flex' : 'hidden'} flex-col border border-gray-200 z-10`}>
        <button 
          type="button" 
          className="font-bold py-2" 
          onClick={() => {
            setIsOpenedEditModal(true);
            setIsOpenedMenu(false);
          }}
        >
          Edit Pot
        </button>

        <button 
          type="button" 
          className="font-bold border-t-2 py-2 text-red-600" 
          onClick={() => {
            setIsOpenedDeleteModal(true);
            setIsOpenedMenu(false);
          }}
        >
          Delete Pot
        </button>
      </div>
    </>
  )
}

export default Menu;