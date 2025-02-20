'use client'

import { AddIcon, PotMenuIcon } from "@/app/lib/utils";
import { useState } from "react";
import Menu from "./Menu";
import AddPotModal from "./AddPotModal";
import AddTransactionModal from "../transactions/AddTransactionModal";
import AddBudgetModal from "../budgets/AddBudgetModal";

export function BtnMenuPot({ setIsOpenedEditModal, setIsOpenedDeleteModal }) {

  const [isOpened, setIsOpened] = useState(false);

  const handleOpenMenuPot = (e) => {
    setIsOpened(!isOpened);
  }

  return (
    <>
      <button type="button" onClick={handleOpenMenuPot}>
        <PotMenuIcon />
      </button>

      <Menu 
        isOpened={isOpened} 
        setIsOpenedMenu={setIsOpened}
        setIsOpenedEditModal={setIsOpenedEditModal} 
        setIsOpenedDeleteModal={setIsOpenedDeleteModal} 
      />
    </>
  )
}

export function BtnAddNewPot() {

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

      <AddPotModal isOpened={isOpened} setIsOpened={setIsOpened} />
    </>
  )
}

export function BtnAddMoney({ setIsOpened }) {
  return (
    <button 
      type="button" 
      className="w-full flex items-center justify-center gap-1 bg-slate-200 rounded-md p-2 font-bold"
      onClick={() => setIsOpened(true)}
    >
      <AddIcon />
      Add Money
    </button>
  )
}

export function BtnWithdraw({ setIsOpened }) {
  return (
    <button 
      type="button" 
      className="w-full bg-slate-200 rounded-md p-2 font-bold"
      onClick={() => setIsOpened(true)}
    >
      Withdraw
    </button>
  )
}

export function BtnAddNewTransaction() {

  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <button 
        type="button" 
        className="flex items-center gap-2 bg-neutral-900 text-white font-bold rounded-md shadow-lg p-2 hover:bg-neutral-800 transition-all ease-in-out duration-200 group"
        onClick={() => setIsOpened(true)}
      >
        <AddIcon />
        <span>Add New Transaction</span>
      </button>

      <AddTransactionModal isOpened={isOpened} setIsOpened={setIsOpened} />
    </>
  )
}

export function BtnAddNewBudget() {

  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <button 
        type="button" 
        className="flex items-center gap-2 bg-neutral-900 text-white font-bold rounded-md shadow-lg p-2 hover:bg-neutral-800 transition-all ease-in-out duration-200 group"
        onClick={() => setIsOpened(true)}
      >
        <AddIcon />
        <span>Add New Budget</span>
      </button>

      <AddBudgetModal isOpened={isOpened} setIsOpened={setIsOpened} />
    </>
  )
}

export function BtnMenuBudget() {

  const [isOpened, setIsOpened] = useState(false);

  const handleOpenMenuBudget = (e) => {
    setIsOpened(!isOpened);
  }

  return (
    <>
      <button type="button" onClick={handleOpenMenuBudget}>
        <PotMenuIcon />
      </button>

      <Menu isOpened={isOpened} setIsOpened={setIsOpened} />
    </>
  )
}