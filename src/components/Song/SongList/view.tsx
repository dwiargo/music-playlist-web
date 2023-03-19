import { ComponentProps, useState } from 'react'
import SongCard from '../SongCard/view'
import { TSong } from '../type'
import { cssSongList } from './style'
import PlaylistSelect from '@/components/Playlist/PlaylistSelect/view'
import { TPlaylist } from '@/components/Playlist/type'
import { Col, Row } from 'react-bootstrap'

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
        <Row xs={1} md={3} lg={4} className="g-4">
          {data
            ? data.map((song: TSong, i: any) => (
                <Col key={`song-${i}`}>
                  <SongCard data={song} onAddToPlaylist={showAddToPlaylist ? handlePreAddToPlaylist : undefined} />
                </Col>
              ))
            : [...Array(12)].map((_d, i) => (
                <Col key={`shimmer-${i}`}>
                  <SongCard />
                </Col>
              ))}
        </Row>
      </div>

      <PlaylistSelect show={showPlaylist} onHide={() => setShowPlaylist(false)} song={selectedSong || undefined} />
    </>
  )
}

export default SongList
