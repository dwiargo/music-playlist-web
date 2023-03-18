import { ComponentProps, useState } from 'react'
import SongCard from '../SongCard/view'
import { TSong } from '../type'
import { cssSongList } from './style'
import PlaylistSelect from '@/components/Playlist/PlaylistSelect/view'
import { TPlaylist } from '@/components/Playlist/type'

type IProps = ComponentProps<'div'> & {
  data: TSong[] | null
  showAddToPlaylist?: boolean
}

const SongList: React.FC<IProps> = ({ data, showAddToPlaylist = false, ...props }) => {
  const [showPlaylist, setShowPlaylist] = useState<boolean>(false)
  const [selectedSong, setSelectedSong] = useState<TSong | null>(null)

  const handlePreAddToPlaylist = (song: TSong) => {
    setSelectedSong(song)
    setShowPlaylist(true)
  }

  return (
    <>
      <div css={cssSongList} {...props}>
        {data
          ? data.map((song: TSong, i: any) => (
              <SongCard key={`song-${i}`} data={song} onAddToPlaylist={showAddToPlaylist ? handlePreAddToPlaylist : undefined} />
            ))
          : [...Array(12)].map((_d, i) => <SongCard key={`shimmer-${i}`} />)}
      </div>

      <PlaylistSelect show={showPlaylist} onHide={() => setShowPlaylist(false)} song={selectedSong || undefined} />
    </>
  )
}

export default SongList
