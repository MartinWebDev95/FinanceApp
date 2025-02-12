'use client';

import { calculatePercentage } from "@/app/lib/utils";
import { BtnAddMoney, BtnMenuPot, BtnWithdraw } from "./buttons";
import { useState } from "react";
import AddMoneyModal from "./AddMoneyModal";
import WithdrawModal from "./WithdrawModal";

const Pot = ({ name, total, target, theme }) => {

  const [isOpenedAddMoneyModal, setIsOpenedAddMoneyModal] = useState(false);
  const [isOpenedWithdrawModal, setIsOpenedWithdrawModal] = useState(false);

  return (
    <>
      <div className="bg-white rounded-md p-4 shadow-lg">
        <div className="flex items-center justify-between relative">
          <h2 className="flex items-center gap-2.5">
            <span className="w-4 h-4 rounded-full" style={{ backgroundColor: theme }}></span>
            <span className="text-xl font-bold">{name}</span> 
          </h2>

          <BtnMenuPot />
        </div>

        <div className="mt-8">
          <p className="w-full flex items-center justify-between">
            <span className="text-gray-500 font-bold">Total Saved</span> 
            <span className="font-bold text-3xl">${total}</span>
          </p>

          {/* Custom Progress Bar */}
          <div className="w-full h-3 bg-gray-200 rounded-full mt-2">
            <div 
              className="h-3 rounded-full" 
              style={{ 
                backgroundColor: theme, 
                width: `${calculatePercentage({ total, target })}%` 
              }}
            /> 
          </div>

          <p className="w-full flex items-center justify-between text-gray-500 font-bold text-xs">
            <span>{calculatePercentage({ total, target })}%</span>
            <span>Target of ${target}</span>
          </p>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <BtnAddMoney setIsOpened={setIsOpenedAddMoneyModal} />

          <BtnWithdraw setIsOpened={setIsOpenedWithdrawModal} />
        </div>
      </div>

      {isOpenedAddMoneyModal && (
        <AddMoneyModal 
          isOpened={isOpenedAddMoneyModal} 
          setIsOpened={setIsOpenedAddMoneyModal}
          name={name} 
          total={total}
          target={target}
        />
      )}

      {isOpenedWithdrawModal && (
        <WithdrawModal 
          isOpened={isOpenedWithdrawModal} 
          setIsOpened={setIsOpenedWithdrawModal}
          name={name} 
          total={total}
          target={target}
        />
      )}
    </>
  )
}

export default Pot;