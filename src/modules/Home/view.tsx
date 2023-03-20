import Jumbotron from '@/components/Jumbotron/view'
import SongList from '@/components/Song/SongList'
import { TSong } from '@/components/Song/type'
import { songData } from '@/constant/tmp-data'
import { rapidApi } from '@/libs/htttp'
import { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { Container } from 'react-bootstrap'
import useSWR from 'swr'

const SONG_LIST_URL = `/songs/list-recommendations?key=484129036&locale=en-US&path=home`
const Home: NextPage = () => {
  const [tracks, setTracks] = useState<TSong[] | null>(null)
  const [keyword, setKeyword] = useState<string>('')
  const { data: session } = useSession()

  useSWR(SONG_LIST_URL, rapidApi.get, {
    onSuccess: (response: any) => {
      const preData = keyword ? response.data.tracks.filter((d: TSong) => d.title.match(new RegExp(keyword, 'ig'))) : response.data.tracks
      setTracks(prepopulateData(preData))
    },
  })

  const prepopulateData = (dataSource: any) => {
    return dataSource.map((d: TSong) => {
      d.isFavourite = localStorage.getItem(`${session?.user?.email}-fav-${d.key}`) ? true : false
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
