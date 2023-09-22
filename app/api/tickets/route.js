// This API route is for client components
// (Data in server components should be accessed directly)
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { NextResponse } from "next/server"
import { cookies } from 'next/headers'

export const dynamic = 'force-dynamic'

export async function POST(request) {
    const ticket = await request.json()

    // get supabase instance
    const supabase= createRouteHandlerClient({ cookies })

    // get the current user session
    const { data: { session }} = await supabase.auth.getSession()

    // insert the data
    const { data, error } = await supabase.from('Tickets')
        .insert({
            ...ticket,
            user_email: session.user.email
        })
        .select()
        .single()

    return NextResponse.json({ data, error })
}