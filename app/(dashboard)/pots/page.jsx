import { BtnAddNewPot } from "@/app/components/pots/buttons";
import ListOfPots from "@/app/components/pots/ListOfPots";
import { PotSkeleton } from "@/app/components/skeletons";
import { Suspense } from "react";

export const dynamic = 'force-dynamic';

export default function PotsPage(){
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Pots</h1>
        <BtnAddNewPot />
      </div>

      <Suspense fallback={<PotSkeleton />}>
        <ListOfPots />
      </Suspense>
    </>
  )
}