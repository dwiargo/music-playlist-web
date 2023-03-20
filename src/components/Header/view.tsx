import { ComponentProps, useState } from 'react'
import { cssHeader } from './style'
import { Button, Modal, Nav, Navbar } from 'react-bootstrap'
import Link from 'next/link'
import { Logout } from 'iconsax-react'
import { signOut, useSession } from 'next-auth/react'

type IProps = ComponentProps<'header'>

const Header: React.FC<IProps> = ({ className, ...props }) => {
  const { data: session } = useSession()
  const [showLogoutDialog, setShowLogoutDialog] = useState<boolean>(false)

  return (
    <>
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
          {session && (
            <div className="profile">
              <p>
                Hi <strong>{session.user?.name?.split(' ')[0]}</strong>
              </p>
              <Logout color="white" size={24} onClick={() => setShowLogoutDialog(true)} />
            </div>
          )}
        </Navbar.Collapse>
        <Navbar.Toggle />
      </Navbar>
      <Modal show={showLogoutDialog} onHide={() => setShowLogoutDialog(false)}>
        <Modal.Header>
          <Modal.Title>Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Do you want to quit?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowLogoutDialog(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => signOut()}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Header
