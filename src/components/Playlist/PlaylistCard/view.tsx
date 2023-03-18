import { ComponentProps } from 'react'
import { Card } from 'react-bootstrap'
import { TPlaylist } from '../type'
import { cssPlaylistCard } from './style'
import Shimmer from '@/components/Shimmer'
import { stringTruncate } from '@/libs/utils'

type IProps = ComponentProps<'div'> & {
  data?: TPlaylist
  onClick?: (d: TPlaylist) => void
}

const PlaylistCard: React.FC<IProps> = ({ data, onClick, ...props }) => {
  return (
    <div css={cssPlaylistCard} {...props}>
      <Card
        className="playlist-card"
        onClick={() => {
          if (onClick && data) onClick(data)
        }}
      >
        {data ? (
          <Card.Body>
            <Card.Title>{stringTruncate(data.name, 24)}</Card.Title>
            <Card.Subtitle className="text-muted">{data.songKeys.length} Songs</Card.Subtitle>
          </Card.Body>
        ) : (
          <Shimmer />
        )}
      </Card>
    </div>
  )
}

export default PlaylistCard
