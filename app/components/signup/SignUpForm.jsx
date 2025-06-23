'use client'

import { createUser } from "@/app/lib/actions";
import Link from "next/link";
import { useActionState } from "react";

const SignUpForm = () => {

  const [errorMessage, formAction, isPending] = useActionState(createUser, undefined);

  return (
    <form action={formAction} className="bg-white text-gray-600 px-10 py-8 rounded-md w-80 sm:w-96 shadow-xl">
      <fieldset>
        <legend className="mb-4 text-neutral-900 font-bold text-4xl">Sign Up</legend>

        <div className="mb-3">
          <label htmlFor="username">Name</label>
          <input 
            type="text" 
            name="username" 
            id="username" 
            className="border border-gray-400 rounded-md block mt-1 py-0.5 px-2 w-full" 
          />

          {
            errorMessage?.errors?.username && (
              errorMessage.errors.username.map((msg, index) => (
                <p key={index} className="text-red-500 text-sm">{msg}</p>
              ))
            )
          }
        </div>

        <div className="mb-3">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            className="border border-gray-400 rounded-md block mt-1 py-0.5 px-2 w-full" 
          />

          {
            errorMessage?.errors?.email && (
              errorMessage.errors.email.map((msg, index) => (
                <p key={index} className="text-red-500 text-sm">{msg}</p>
              ))
            )
          }
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            name="password" 
            id="password" 
            className="border border-gray-400 rounded-md block mt-1 py-0.5 px-2 w-full" 
          />

          {
            errorMessage?.errors?.password && (
              errorMessage.errors.password.map((msg, index) => (
                <p key={index} className="text-red-500 text-sm">{msg}</p>
              ))
            )
          }
        </div>
      </fieldset>

      <button 
        type="submit" 
        aria-disabled={isPending}
        className="w-full rounded-md bg-neutral-900 text-white font-bold mt-8 py-2 hover:bg-neutral-800 transition-all ease-in-out duration-200 aria-disabled:cursor-not-allowed aria-disabled:opacity-70" 
      >
        Sign Up
      </button>

      <p className="w-full mt-4 flex justify-center gap-2 text-sm">
        You have already an account? 
        <Link href="/login" className="text-neutral-900 font-bold hover:underline">Login</Link>
      </p>
    </form>
  )
}

export default SignUpForm;