"use client"

import AuthForm from "../AuthForm";

export default function Login() {

  const handleSubmit = async (e, email, password) => {
    e.preventDefault()

    console.log('user login', email, password)
  }

  return (
    <main className="text-center">
        <h2>Log in</h2>

        <AuthForm handleSubmit={handleSubmit} />
    </main>
  )
}