import BtnAddModal from "@/app/components/pots/BtnAddModal";

export default function PotsPage(){
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Pots</h1>
        <BtnAddModal />
      </div>
    </>
  )
}