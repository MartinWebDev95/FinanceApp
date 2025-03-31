import { useEffect, useState } from "react";

const useModal = ({ setIsOpened, isPending, errorMessage, total = 0, target = 0 }) => {

  const [newAmount, setNewAmount] = useState(0);

  useEffect(() => {
    if(!isPending && !errorMessage?.errors) {
      setIsOpened(false);
    }
  }, [isPending]);

  const handleCloseModal = (e) => {
    if(e.target.ariaModal){
      setIsOpened(false);
    }

    return;
  }

  const handleAddMoney = (e) => {
    if(Number(e.target.value) === 0){
      setNewAmount('');
      return;
    }

    if((Number(e.target.value) > total)){
      setNewAmount(total);
      return;
    }

    setNewAmount(Number(e.target.value));
  }

  const handleWithdrawMoney = (e) => {
    if(Number(e.target.value) < 1){
      setNewAmount('');
      return;
    }

    if(Number(e.target.value) > (target - total)){
      setNewAmount(target - total);
      return;
    }

    setNewAmount(Number(e.target.value));
  };

  return {
    handleCloseModal,
    handleAddMoney,
    handleWithdrawMoney,
    newAmount
  };
}

export default useModal;