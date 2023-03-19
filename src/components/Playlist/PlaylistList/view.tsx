import { ComponentProps } from 'react'
import PlaylistCard from '../PlaylistCard/view'
import { TPlaylist } from '../type'
import { cssPlaylistList } from './style'
import { Col, Row } from 'react-bootstrap'

type IProps = ComponentProps<'div'> & {
  data: TPlaylist[] | null
  onSelected?: (d: TPlaylist) => void
}

const PlaylistList: React.FC<IProps> = ({ data, onSelected, ...props }) => {
  return (
    <div css={cssPlaylistList} {...props}>
      <Row xs={1} md={3} xl={4}>
        {data
          ? data.map((song: TPlaylist, i: any) => (
              <Col key={`song-${i}`}>
                <PlaylistCard data={song} onClick={onSelected} />
              </Col>
            ))
          : [...Array(12)].map((_d, i) => (
              <Col key={`song-${i}`}>
                <PlaylistCard key={`shimmer-${i}`} />
              </Col>
            ))}
      </Row>
    </div>
  )
}

export default PlaylistList
