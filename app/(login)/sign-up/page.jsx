'use client'

import { createUser } from "@/app/lib/actions";
import Link from "next/link";
import { useActionState } from "react";

export default function SignUpPage(){

  const [errorMessage, formAction, isPending] = useActionState(createUser, undefined);

  return (
    <form action={formAction} className="bg-white text-gray-600 px-10 py-8 rounded-md w-96 shadow-xl">
      <fieldset>
        <legend className="mb-4 text-neutral-900 font-bold text-4xl">Sign Up</legend>

        <div className="mb-3">
          <label htmlFor="email">Name</label>
          <input className="border border-gray-400 rounded-md block mt-1 py-0.5 px-2 w-full" type="text" name="username" id="username" />
        </div>

        <div className="mb-3">
          <label htmlFor="email">Email</label>
          <input className="border border-gray-400 rounded-md block mt-1 py-0.5 px-2 w-full" type="email" name="email" id="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input className="border border-gray-400 rounded-md block mt-1 py-0.5 px-2 w-full" type="password" name="password" id="password" />
        </div>
      </fieldset>

      <button type="submit" className="w-full rounded-md bg-neutral-900 text-white font-bold mt-8 py-2 hover:bg-neutral-800 transition-all ease-in-out duration-200" disabled={isPending}>
        Sign Up
      </button>

      <p className="w-full mt-4 flex justify-center gap-2">
        You have already an account? 
        <Link href="/login" className="text-neutral-900 font-bold hover:underline">Login</Link>
      </p>
    </form>
  )
}