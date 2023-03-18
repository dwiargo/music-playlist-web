import { ComponentProps } from 'react'
import PlaylistCard from '../PlaylistCard/view'
import { TPlaylist } from '../type'
import { cssPlaylistList } from './style'

type IProps = ComponentProps<'div'> & {
  data: TPlaylist[] | null
  onSelect?: (d: TPlaylist) => void
}

const PlaylistList: React.FC<IProps> = ({ data, onSelect, ...props }) => {
  return (
    <div css={cssPlaylistList} {...props}>
      {data
        ? data.map((song: TPlaylist, i: any) => <PlaylistCard key={`song-${i}`} data={song} onClick={onSelect} />)
        : [...Array(12)].map((_d, i) => <PlaylistCard key={`shimmer-${i}`} />)}
    </div>
  )
}

export default PlaylistList
