import { fetchPots } from '@/app/lib/data';
import { ArrowDetails, PotsIcon } from '@/app/lib/utils'
import Link from 'next/link';

const PotsSummary = async () => {
  const pots = await fetchPots({ limit: 4 });

  return (
    <div className="break-inside-avoid p-6 mb-6 bg-white rounded-md shadow-lg">
      <div className="w-full flex items-center justify-between">
        <h2 className="text-neutral-900 text-2xl font-bold">Pots</h2>
        <Link href='/pots' className="flex items-center gap-2 group text-slate-600">
          <span>See details</span>
          <ArrowDetails />
        </Link>
      </div>

      <div className="flex flex-col md:flex-row items-center mt-4 gap-4 w-full h-full">
        <div className="w-full md:w-1/2 rounded-md bg-slate-200 flex items-center gap-2 h-full text-neutral-900 p-4 flex-1">
          <PotsIcon width='50' height='50' />

          <div className="w-full">
            <p className="mb-1 text-slate-600">Pots</p>
            <p className="font-bold text-3xl">
              ${pots[0].total_sum}
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 grid grid-cols-2 grid-rows-2 gap-y-2 h-full flex-1">
          {pots.map((pot) => (
            <div key={pot.name} className="h-full flex items-center w-full">
              <div 
                className="h-full w-1 rounded-md" 
                style={{ backgroundColor: pot.theme }}
              />

              <div className="ml-2">
                <p className="text-slate-600 text-xs">{pot.name}</p>
                <p className="text-neutral-900 font-bold">${pot.total}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PotsSummary