'use client'

import useSignIn from "@/app/hooks/useSignIn";
import Link from "next/link";

const LoginForm = () => {
  
  const { handleSubmit, error } = useSignIn();

  return (
    <form 
      onSubmit={handleSubmit}
      className="bg-white text-gray-600 px-10 py-8 rounded-md w-80 sm:w-96 shadow-xl"
    >
      <fieldset>
        <legend className="mb-4 text-neutral-900 font-bold text-4xl">Login</legend>

        {error?.credentialSigning && (
          <div className="w-full p-2 bg-red-500 text-white text-center mb-4 rounded-md">
            <p>{error.credentialSigning}</p>
          </div>
        )}

        <div className="mb-3">
          <label htmlFor="email">Email</label>

          <input 
            type="email" 
            name="email" 
            id="email" 
            className="border border-gray-400 rounded-md block mt-1 py-0.5 px-2 w-full" 
          />

          {error?.email && (
            error.email.map((err, index) => (
              <p key={index} className="text-red-500 text-sm mt-1">{err}</p>
            ))
          )}
        </div>

        <div>
          <label htmlFor="password">Password</label>

          <input 
            type="password" 
            name="password" 
            id="password" 
            className="border border-gray-400 rounded-md block mt-1 py-0.5 px-2 w-full" 
          />

          {error?.password && (
            error.password.map((err, index) => (
              <p key={index} className="text-red-500 text-sm mt-1">{err}</p>
            ))
          )}
        </div>
      </fieldset>

      <button 
        type="submit" 
        className="w-full rounded-md bg-neutral-900 text-white font-bold mt-8 py-2 hover:bg-neutral-800 transition-all ease-in-out duration-200" 
      >
        Login
      </button>
      
      <p className="w-full mt-4 flex justify-center gap-2">
        You don't have an account yet? 
        <Link href="/sign-up" className="text-neutral-900 font-bold hover:underline">
          Sign up
        </Link>
      </p>

      <div className="w-full mt-4 text-sm">
        <p className="text-neutral-900 text-center font-bold mb-1">Demo user</p>
        <div className="flex flex-col items-center">
          <div>
            <p>
              <span className="text-neutral-900 font-bold">Email: </span> 
              demo@finance.com
            </p>
            <p>
              <span className="text-neutral-900 font-bold">Password: </span> 
              finance12345
            </p>
          </div>
        </div>
      </div>
    </form>
  )
}

export default LoginForm;