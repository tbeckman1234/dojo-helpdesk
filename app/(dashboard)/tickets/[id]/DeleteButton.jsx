"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { TiDelete } from 'react-icons/ti'
import { useTransition } from "react"
import { deleteTicket } from "../actions"

export default function DeleteButton({ id }) {
    const [isPending, startTransition] = useTransition()

  return (
    <button 
        className="btn-primary"
        onClick={() => startTransition(() => deleteTicket(id))}
        disabled={isPending}
    >        
        {isPending && (
            <>
                <TiDelete />
                Deleting...
            </>
        )}
        {!isPending && (
            <>
                <TiDelete />
                Delete Ticket            
            </>
        )}
    </button>
  )
}