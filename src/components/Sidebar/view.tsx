import Link from 'next/link'
import { cssSidebar } from './style'
import { useRouter } from 'next/router'
import { signOut, useSession } from 'next-auth/react'
import { Modal, Button } from 'react-bootstrap'
import { useState, ComponentProps } from 'react'

type IProps = ComponentProps<'div'>

export const Sidebar: React.FC<IProps> = (props) => {
  const { pathname } = useRouter()
  const { data: session } = useSession()
  const [showLogoutDialog, setShowLogoutDialog] = useState<boolean>(false)
  return (
    <>
      <div css={cssSidebar} {...props}>
        {session && (
          <div className="profile">
            <h3 className="greeting">
              Hi, <strong>{session?.user?.name?.split(' ')[0]}</strong>
            </h3>
            <p onClick={() => setShowLogoutDialog(true)}>Logout</p>
          </div>
        )}
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
            <Link key={`nav-${i}`} href={n.path} data-active={pathname === n.path} scroll={true}>
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
      <Modal show={showLogoutDialog} onHide={() => setShowLogoutDialog(false)}>
        <Modal.Header>
          <Modal.Title>Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to quit?</Modal.Body>
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

export default Sidebar
