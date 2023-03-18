import { ComponentProps, useState } from 'react'
import { Modal } from 'react-bootstrap'
import useSWR, { mutate } from 'swr'
import { TPlaylist } from '../type'
import PlaylistList from '../PlaylistList/view'
import { USER_PLAYLIST_STORAGE_KEY } from '@/constant/env'
import { TSong } from '@/components/Song/type'

type IProps = ComponentProps<'div'> & {
  show: boolean
  onHide: () => void
  song?: TSong
}

const PLAYLIST_URL = '/user-playlist'
const PlaylistSelect: React.FC<IProps> = ({ show, onHide, song }) => {
  const [keyword] = useState<string>('')
  const { data } = useSWR(
    PLAYLIST_URL,
    () =>
      new Promise((resolve) => {
        const storageData: string | null = localStorage.getItem(USER_PLAYLIST_STORAGE_KEY)
        const preData: TPlaylist[] = storageData ? JSON.parse(storageData) : []
        const result = keyword ? preData.filter((d: TPlaylist) => d.name.match(new RegExp(keyword, 'ig'))) : preData
        resolve(result)
      })
  )

  const handleSelect = (playlist: TPlaylist) => {
    const item = (data as TPlaylist[]).find((elem: TPlaylist) => elem.id === playlist.id)
    if (item && song) {
      item.songKeys.push(song.key)
      item.songKeys = item.songKeys.filter((value, index, arr) => arr.indexOf(value) === index)
      localStorage.setItem(USER_PLAYLIST_STORAGE_KEY, JSON.stringify(data))
      mutate(PLAYLIST_URL)
    }
  }

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton onHide={onHide}>
        <Modal.Title>Select Playlist</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          {`Please select playlist for adding song `} <strong>{song?.title}</strong>
        </p>
        <PlaylistList data={data as TPlaylist[]} onSelect={handleSelect} />
      </Modal.Body>
    </Modal>
  )
}

export default PlaylistSelect