import Pot from './Pot';
import { fetchPots } from '@/app/lib/data';

const ListOfPots = async () => {

  const pots = await fetchPots();

  return (
    <ul className="grid grid-cols-auto-fill gap-4 mt-8">
      {pots.map(pot => (
        <Pot 
          key={pot.name} 
          {...pot}
        />
      ))}
    </ul>
  )
}

export default ListOfPots;