import { Alert, Button, Modal } from 'react-bootstrap'
import { TPlaylist } from '../type'
import useSWR, { mutate } from 'swr'
import { songData } from '@/constant/tmp-data'
import { TSong } from '@/components/Song/type'
import SongCard from '@/components/Song/SongCard/view'
import { useEffect, useState } from 'react'
import { USER_PLAYLIST_STORAGE_KEY } from '@/constant/env'
import PlaylistCard from '../PlaylistCard'

type IProps = {
  show: boolean
  onHide: (reload?: boolean) => void
  data?: TPlaylist
}

const SONG_LIST_URL = `/songs/list-recommendations`
export const PlaylistDetail: React.FC<IProps> = ({ show, onHide, data }) => {
  const [tracks, setTracks] = useState<TSong[]>([])

  useSWR(data ? SONG_LIST_URL : null, () => Promise.resolve(songData), {
    onSuccess: (response) => {
      let result = response.tracks
        .filter((d: any) => (data ? data.songKeys.indexOf(d.key) >= 0 : false))
        .map((d: any) => {
          d.isFavourite = localStorage.getItem(`fav-${d.key}`) ? true : false
          return d
        })

      setTracks([...result])
    },
    revalidateOnFocus: false,
  })

  const handleRemove = () => {
    const storageData: string | null = localStorage.getItem(USER_PLAYLIST_STORAGE_KEY)
    const preData: TPlaylist[] = storageData ? JSON.parse(storageData) : []
    const result = preData.filter((d: TPlaylist) => d.id !== data?.id)
    localStorage.setItem(USER_PLAYLIST_STORAGE_KEY, JSON.stringify(result))
    onHide(true)
  }

  useEffect(() => {
    if (data) mutate(SONG_LIST_URL)
    else setTracks([])
  }, [data])

  return (
    <Modal show={show} onHide={onHide}>
      {/* <Modal.Header closeButton onHide={onHide}>
        <Modal.Title>{data?.name}</Modal.Title>
      </Modal.Header> */}
      <Modal.Body>
        <PlaylistCard data={data} />
        {tracks.length > 0 ? (
          (tracks as TSong[])?.map((song: TSong, i: number) => <SongCard key={`song-${i}`} data={song} landscapeMode />)
        ) : (
          <Alert variant="danger">There are no songs for this playlist yet</Alert>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleRemove}>
          Remove
        </Button>
        <Button onClick={() => onHide()}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default PlaylistDetail
