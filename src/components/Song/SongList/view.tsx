import { ComponentProps } from 'react'
import SongCard from '../SongCard/view'
import { TSong } from '../type'
import { cssSongList } from './style'
 
type IProps = ComponentProps<'div'> & {
  data: TSong[] | null
}

const SongList: React.FC<IProps> = ({ data, ...props}) => {
  return (
    <div css={cssSongList} {...props}>
      {data ? data.map((song: TSong, i: any) => (
        <SongCard key={`song-${i}`} data={song}/>
      )) : [...Array(12)].map((_d, i) => (
        <SongCard key={`shimmer-${i}`}/>
      ))}}
    </div>
  )
}

export default SongList