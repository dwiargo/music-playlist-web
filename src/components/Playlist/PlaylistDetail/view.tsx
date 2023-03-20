import { Alert, Button, Modal } from 'react-bootstrap'
import { TPlaylist } from '../type'
import useSWR, { mutate } from 'swr'
import { songData } from '@/constant/tmp-data'
import { TSong } from '@/components/Song/type'
import SongCard from '@/components/Song/SongCard/view'
import { useEffect, useState } from 'react'
import { USER_PLAYLIST_STORAGE_KEY } from '@/constant/env'
import PlaylistCard from '../PlaylistCard'
import { useSession } from 'next-auth/react'

type IProps = {
  show: boolean
  onHide: (reload?: boolean) => void
  data?: TPlaylist
}

const SONG_LIST_URL = `/songs/list-recommendations`
export const PlaylistDetail: React.FC<IProps> = ({ show, onHide, data }) => {
  const [tracks, setTracks] = useState<TSong[]>([])
  const { data: session } = useSession()

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
    const storageKey = `${session?.user?.email}-${USER_PLAYLIST_STORAGE_KEY}`
    const storageData: string | null = localStorage.getItem(storageKey)
    const preData: TPlaylist[] = storageData ? JSON.parse(storageData) : []
    const result = preData.filter((d: TPlaylist) => d.id !== data?.id)
    localStorage.setItem(storageKey, JSON.stringify(result))
    onHide(true)
  }

  useEffect(() => {
    if (data) mutate(SONG_LIST_URL)
    else setTracks([])
  }, [data])

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Body>
        <PlaylistCard data={data} />
        {tracks.length > 0 ? (
          (tracks as TSong[])?.map((song: TSong, i: number) => <SongCard key={`song-${i}`} data={song} landscapeMode />)
        ) : (
          <Alert variant="danger">There are no songs for this playlist yet</Alert>
        )}
      </Modal.Body>
      <Modal.Footer>
        {data?.name !== 'Default Playlist' && (
          <Button variant="danger" onClick={handleRemove}>
            Remove
          </Button>
        )}
        <Button onClick={() => onHide()}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default PlaylistDetail
