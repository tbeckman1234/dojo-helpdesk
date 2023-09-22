// Primary dependencies
import Image from 'next/image'
import Link from 'next/link'

// Internal components
import LogoutButton from './LogoutButton'

// Styles & assets
import Logo from './dojo-logo.png'

export default function Navbar({ user }) {
  return (
    <nav>
        <Image 
          src={Logo}
          alt="Dojo Helpdesk logo"
          width={70}
          quality={100}
          placeholder="blur"
        />
        <h1>Dojo Helpdesk</h1>
        <Link href="/">Dashboard</Link>
        <Link href="/tickets" className="mr-auto">Tickets</Link>

        {user && <span>Hello, {user.email}</span>}
        <LogoutButton />
    </nav>
)
}