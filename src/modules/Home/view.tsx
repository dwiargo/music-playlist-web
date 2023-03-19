import Jumbotron from '@/components/Jumbotron/view'
import SongList from '@/components/Song/SongList'
import { TSong } from '@/components/Song/type'
import { songData } from '@/constant/tmp-data'
import { NextPage } from 'next'
import { useState } from 'react'
import { Container } from 'react-bootstrap'
import useSWR from 'swr'

const SONG_LIST_URL = `/songs/list-recommendations?state=home`
const Home: NextPage = () => {
  const [tracks, setTracks] = useState<TSong[] | null>(null)
  const [keyword, setKeyword] = useState<string>('')
  useSWR(SONG_LIST_URL, () => Promise.resolve(songData), {
    onSuccess: (response: any) => {
      const preData = keyword ? response.tracks.filter((d: TSong) => d.title.match(new RegExp(keyword, 'ig'))) : response.tracks
      setTracks(prepopulateData(preData))
    },
  })

  const prepopulateData = (dataSource: any) => {
    return dataSource.map((d: TSong) => {
      d.isFavourite = localStorage.getItem(`fav-${d.key}`) ? true : false
      return d
    })
  }

  return (
    <Container>
      <Jumbotron title="Home" />
      <SongList title="Featured" data={tracks} showAddToPlaylist />
    </Container>
  )
}

export default Home
