'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { Text } from './Text'

// import { fonts } from './components/Text';
const routes = ['Photos', 'Writing', 'Experiment', 'Books', 'Resume', 'Gear']

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className='main-navbar'>
      {routes.map((route, index) => {
        const isActive = pathname!.includes(route.toLocaleLowerCase());
        return (
          <Link href={route.toLocaleLowerCase()} key={index} className={isActive ? 'active-link' : ''}>
            <Text>
              {route}
            </Text>
          </Link>
        )
      })}
    </nav>
  )
}
