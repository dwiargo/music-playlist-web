import { ComponentProps, useState } from 'react'
import { Card } from 'react-bootstrap'
import { TSong } from '../type'
import { cssSongCard } from './style'
import { stringTruncate } from '@/libs/utils'
import { Heart } from 'iconsax-react'
import Shimmer from '@/components/Shimmer'

type IProps = ComponentProps<'div'> & {
  data: TSong | null
}

const SongCard: React.FC<IProps> = ({ data, ...props }) => {
  const [favourite, setFavourite] = useState<boolean>(data && data.isFavourite ? data.isFavourite : false)
  const handleFavourite = () => {
    const isFavourite = !favourite
    setFavourite(isFavourite)

    const key = `fav-${data.key}`
    if (isFavourite) {
      localStorage.setItem(key, 1)
    } else {
      localStorage.removeItem(key)
    }
  }

  return (
    <div css={cssSongCard} {...props}>
      <Card className="song-card">
        {data ? (
          <>
            <Card.Img src={data.share.image} />
            <Card.Body>
              <div>
                <Card.Title>{stringTruncate(data.title, 18)}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{data.subtitle}</Card.Subtitle>
              </div>
              <Heart color={favourite ? 'red' : '#aaa'} variant={favourite ? 'Bold' : 'Outline'} onClick={handleFavourite} />
            </Card.Body>
          </>
        ) : (
          <Shimmer />
        )}
      </Card>
    </div>
  )
}

export default SongCard
