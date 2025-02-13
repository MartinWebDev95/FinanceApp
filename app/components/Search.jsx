'use client';

const Search = ({ placeholder }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form action="" onSubmit={handleSubmit} className="w-80">
      <input 
        type="text" 
        placeholder={placeholder} 
        className="border border-gray-400 rounded-md p-2 w-full" 
      />
    </form>
  )
}

export default Search;