const Cards = ({ title, data, main = false }) => {
  return (
    <div className={`w-full ${main ? 'bg-neutral-900 text-white' : 'bg-white text-neutral-900'} rounded-md shadow-lg p-6`}>
      <p className={`text-sm ${main ? 'text-white' : 'text-slate-500'} mb-1`}>{title}</p>
      <p className="font-bold text-3xl">{`$${data}`}</p>
    </div>
  )
}

export default Cards;