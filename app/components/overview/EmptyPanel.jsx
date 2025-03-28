import Link from 'next/link'

const EmptyPanel = ({ title, href }) => {
  return (
    <div className="break-inside-avoid p-6 mb-6 bg-white rounded-md shadow-lg">
      <div className="w-full">
        <h2 className="text-neutral-900 text-2xl font-bold">{title}</h2>
      </div>

      <p className='text-center my-6 text-slate-500'>
        Go to {title} page to starting create new {title}
      </p>

      <Link 
        href={href} 
        className="flex items-center bg-neutral-900 text-white font-bold rounded-md shadow-lg p-2 hover:bg-neutral-800 transition-all ease-in-out duration-200 w-fit mx-auto"
      >
        Go to {title}
      </Link>
    </div>
  )
}

export default EmptyPanel