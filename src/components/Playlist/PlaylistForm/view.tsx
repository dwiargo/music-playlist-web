import { Button, Form, Modal } from 'react-bootstrap'
import { TPlaylist } from '../type'
import { useEffect, useState } from 'react'
import { USER_PLAYLIST_STORAGE_KEY } from '@/constant/env'
import { useSession } from 'next-auth/react'

type IProps = {
  show: boolean
  onHide: () => void
  data?: TPlaylist
}

const initialValue: TPlaylist = {
  id: new Date().getTime().toString(),
  name: '',
  songKeys: [],
}

const PlaylistForm: React.FC<IProps> = ({ show, onHide, data }) => {
  const [formValue, setFormValue] = useState<TPlaylist>(initialValue)
  const { data: session } = useSession()

  const handleChange = (e: any, key: string) => {
    setFormValue((value: TPlaylist) => {
      value[key as keyof typeof value] = e.target.value
      return { ...value }
    })
  }

  const handleSubmit = () => {
    if (formValue.name && formValue.name !== 'Default Playlist') {
      const storageKey = `${session?.user?.email}-${USER_PLAYLIST_STORAGE_KEY}`
      const userPlaylistOnStorage = localStorage.getItem(storageKey)
      const userPlaylist: TPlaylist[] = userPlaylistOnStorage ? JSON.parse(userPlaylistOnStorage) : []
      const currentItem = userPlaylist.find((elem: TPlaylist) => elem.id === formValue.id)
      if (currentItem) {
        userPlaylist[userPlaylist.indexOf(currentItem)] = formValue
      } else {
        userPlaylist.push({
          ...formValue,
          id: new Date().getTime().toString(),
        })
      }

      localStorage.setItem(storageKey, JSON.stringify(userPlaylist))
      onHide()
    } else {
    }
  }

  useEffect(() => {
    setFormValue(data ? { ...data } : initialValue)
  }, [data])

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{`${data ? 'Edit' : 'Add'} Playlist`}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control placeholder="Type playlist name" onChange={(e: any) => handleChange(e, 'name')} value={formValue.name} required />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default PlaylistForm
