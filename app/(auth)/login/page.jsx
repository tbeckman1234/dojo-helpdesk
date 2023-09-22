"use client"

import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

// components
import AuthForm from "../AuthForm";

export default function Login() {
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e, email, password) => {
    e.preventDefault()
    setError('')

    const supabase = createClientComponentClient()
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    if (error) {
      setError(error.message)
    }
    if (!error) {
      router.push('/')
    }

  }

  return (
    <main className="text-center">
        <h2>Log in</h2>

        <AuthForm handleSubmit={handleSubmit} />

        {error && (
          <div className="error">{error}</div>
        )}
    </main>
  )
}