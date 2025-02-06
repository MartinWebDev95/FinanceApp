'use client'

import { AddIcon } from "@/app/lib/utils";
import Modal from "./Modal";
import { useState } from "react";

const BtnAddModal = () => {

  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <button 
        type="button" 
        className="flex items-center gap-2 bg-neutral-900 text-white font-bold rounded-md shadow-lg p-2 hover:bg-neutral-800 transition-all ease-in-out duration-200 group"
        onClick={() => setIsOpened(true)}
      >
        <AddIcon />
        <span>Add New Pot</span>
      </button>

      <Modal isOpened={isOpened} setIsOpened={setIsOpened} />
    </>
  )
}

export default BtnAddModal;