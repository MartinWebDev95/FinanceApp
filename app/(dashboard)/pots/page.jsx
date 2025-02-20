import { BtnAddNewPot } from "@/app/components/pots/buttons";
import Pot from "@/app/components/pots/Pot";
import { fetchPots } from "@/app/lib/data";

export default async function PotsPage(){

  const pots = await fetchPots();

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Pots</h1>
        <BtnAddNewPot />
      </div>

      <div className="grid grid-cols-auto-fill gap-4 mt-8">
        {pots.map(pot => (
          <Pot 
            key={pot.name} 
            {...pot}
          />
        ))}
      </div>
    </>
  )
}