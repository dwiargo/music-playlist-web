import { ComponentProps } from 'react'
import { cssHeader } from './style'
import { Container, Nav, Navbar } from 'react-bootstrap'
import Link from 'next/link'
import { MusicDashboard } from 'iconsax-react'
import { COLOR_PRIMARY } from '@/constant/theme'

type IProps = ComponentProps<'header'>

const Header: React.FC<IProps> = ({ ...props }) => {
  return (
    <Navbar bg="dark" css={cssHeader}>
      <Container>
        <Navbar.Brand href="/">
          <p className="logo">
            <MusicDashboard size={36} color={COLOR_PRIMARY} variant="Bold" style={{ marginRight: 4 }} />
            my<span>playlist</span>
          </p>
        </Navbar.Brand>
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
      </Container>

      <nav className="menu"></nav>
    </Navbar>
  )
}

export default Header
