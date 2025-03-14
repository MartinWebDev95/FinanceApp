'use client';

import { useRouter } from "next/navigation";

export default function NotFound() {

  const router = useRouter();

  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <h2 className="text-xl font-semibold">404 Not Found</h2>

      <p>Couldn't find the requested route.</p>

      <button
        type="button"
        className="mt-3 font-bold rounded-md shadow-lg bg-neutral-900 px-4 p-2 text-white hover:bg-neutral-800 transition-all ease-in-out duration-200"
        onClick={() => router.back()}
      >
        Go Back
      </button>
    </main>
  );
}