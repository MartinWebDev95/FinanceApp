export default function LoginPage() {
  return (
    <form action="" className="bg-white text-gray-600 p-10 rounded-md w-96 shadow-xl">
      <fieldset>
        <legend className="mb-4 text-neutral-900 font-bold text-4xl">Login</legend>

        <div className="mb-3">
          <label htmlFor="email">Email</label>
          <input className="border border-gray-400 rounded-md block mt-1 py-0.5 px-2 w-full" type="email" name="email" id="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input className="border border-gray-400 rounded-md block mt-1 py-0.5 px-2 w-full" type="password" name="password" id="password" />
        </div>
      </fieldset>

      <button type="submit" className="w-full rounded-md bg-neutral-900 text-white font-bold mt-8 py-2 hover:bg-neutral-800 transition-all ease-in-out duration-200">
        Login
      </button>

      <div className="w-full mt-4 flex justify-center">
        <div className="w-fit text-sm">
          <p className="text-neutral-900 text-center font-bold">Demo user</p>
          <p><span className="text-neutral-900 font-bold">Email:</span> user@test.com</p>
          <p><span className="text-neutral-900 font-bold">Password:</span> 12345</p>
        </div>
      </div>
    </form>
  )
}