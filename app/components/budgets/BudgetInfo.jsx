'use client'

import { calculatePercentage } from "@/app/lib/utils";
import { useState } from "react";
import { BtnMenuBudget } from "../pots/buttons";
import AddBudgetModal from "./AddBudgetModal";
import DeleteBudgetModal from "./DeleteBudgetModal";

const BudgetInfo = ({ budget, categories }) => {
  
  const [isOpenedEditBudgetModal, setIsOpenedEditBudgetModal] = useState(false);
  const [isOpenedDeleteBudgetModal, setIsOpenedDeleteBudgetModal] = useState(false);
  
  return (
    <>
      <div className="flex items-center justify-between relative">
        <h2 className="flex items-center gap-2.5">
          <span 
            className="w-4 h-4 rounded-full" 
            style={{ backgroundColor: budget.theme }}
          >
          </span>
          
          <span className="text-xl font-bold">{budget.label}</span> 
        </h2>

        <BtnMenuBudget 
          setIsOpenedEditModal={setIsOpenedEditBudgetModal} 
          setIsOpenedDeleteModal={setIsOpenedDeleteBudgetModal}
        />
      </div>
      <p className="text-gray-500 mt-3">Maximum of ${`${budget.maximum}`}</p>
      
      {/* Custom Progress Bar */}
      <div className="w-full h-3 bg-gray-200 rounded-full mt-3">
        <div 
          className="h-3 rounded-full" 
          style={{ 
            backgroundColor: budget.theme, 
            width: `${calculatePercentage({ 
              total: Math.abs(budget.total_transactions_amount), 
              target: budget.maximum 
            })}%`
          }}
        /> 
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="relative">
          <div 
            className="absolute left-0 top-0 h-full w-1 rounded-full" 
            style={{ backgroundColor: budget.theme }} 
          />
          <p className="pl-4 text-xs text-gray-500">Spent</p>
          <p className="pl-4 font-bold">
            ${Math.abs(budget.total_transactions_amount)}
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute left-0 top-0 h-full w-1 rounded-full bg-amber-200"/>
          <p className="pl-4 text-xs text-gray-500">Free</p>
          <p className="pl-4 font-bold">
            ${budget.maximum - Math.abs(budget.total_transactions_amount)}
          </p>
        </div>
      </div>

      {isOpenedEditBudgetModal && (
        <AddBudgetModal 
          isOpened={isOpenedEditBudgetModal} 
          setIsOpened={setIsOpenedEditBudgetModal} 
          budget={budget}
          categories={categories}
          edit
        />
      )}

      {isOpenedDeleteBudgetModal && (
        <DeleteBudgetModal 
          isOpened={isOpenedDeleteBudgetModal} 
          setIsOpened={setIsOpenedDeleteBudgetModal} 
          budget={budget}
        /> 
      )}
    </>
  )
}

export default BudgetInfo;