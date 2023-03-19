import Link from 'next/link'
import { cssSidebar } from './style'
import { useRouter } from 'next/router'
import Logo from '../Logo'

export const Sidebar = () => {
  const { pathname } = useRouter()
  return (
    <div css={cssSidebar}>
      <nav>
        {[
          {
            path: '/',
            label: 'Home',
          },
          {
            path: '/search',
            label: 'Search',
          },
          {
            path: '/playlist',
            label: 'Playlist',
          },
          {
            path: '/favourite',
            label: 'Favourite',
          },
        ].map((n: any, i: number) => (
          <Link key={`nav-${i}`} href={n.path} data-active={pathname === n.path}>
            {n.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default Sidebar
