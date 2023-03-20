import { ComponentProps } from 'react'
import { cssHeader } from './style'
import { Container, Nav, Navbar } from 'react-bootstrap'
import Link from 'next/link'
import { MusicDashboard } from 'iconsax-react'
import { COLOR_PRIMARY } from '@/constant/theme'
import { useSession } from 'next-auth/react'

type IProps = ComponentProps<'header'>

const Header: React.FC<IProps> = ({ className, ...props }) => {
  const { data: session } = useSession()
  return (
    <Navbar bg="dark" css={cssHeader} className={className}>
      <Navbar.Collapse id="main-menu-nav">
        <Nav className="me-auto">
          <Nav.Link>
            <Link href="/">Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link href="/search">Search</Link>
          </Nav.Link>
          <Nav.Link>
            <Link href="/playlist">Playlist</Link>
          </Nav.Link>
          <Nav.Link>
            <Link href="/favourite">Favourite</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Toggle />
      <div></div>
    </Navbar>
  )
}

export default Header
