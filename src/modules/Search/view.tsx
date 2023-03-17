import { NextPage } from 'next'
import { songData } from '@/constant/tmp-data'
import SongList from '@/components/Song/SongList/view'
import useSWR from 'swr'
import { TSong } from '@/components/Song/type'
import { useState } from 'react'

const Search: NextPage = (props) => {
  const [tracks, setTracks] = useState<TSong[] | null>(null)
  const { data } = useSWR(`/songs/list-recommendations`, () => Promise.resolve(songData), {
    onSuccess: (response: any) => {
      const __tracks = response.tracks.map((d: TSong) => {
        d.isFavourite = localStorage.getItem(`fav-${d.key}`) ? true : false
        return d
      })
      setTracks(__tracks)
    },
  })
  console.log(data)
  return (
    <main>
      <SongList data={tracks} />
    </main>
  )
}

export default Search
