"use client"

import { useRouter } from "next/navigation";

export default function Button({ children }) {
  const router = useRouter()

  const handleClick = () => {
    router.push('/dashboard/analytics');
  }

  return (
    <button onClick={handleClick} className="px-4 py-2 bg-blue-500 text-white rounded mt-4">
      {children}
    </button>
  );
}