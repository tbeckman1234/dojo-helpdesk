import { Suspense } from "react";
import TicketList from "./TicketList";
import Loading from "../loading";
import { HiPlus } from "react-icons/hi";
import Link from "next/link";

export const metadata = {
  title: 'Dojo Helpdesk | Tickets',
}

export default function Tickets() {
  return (
    <main>
        <nav>
          <div>
            <h2>Tickets</h2>
            <p><small>Currently open tickets.</small></p>
          </div>
          <Link href='/tickets/create' className="ml-auto">
          <button className="btn-primary"><HiPlus />Create New Ticket</button>
        </Link>
        </nav>
        
        <Suspense fallback={<Loading />}>
          <TicketList />
        </Suspense>
    </main>
  )
}