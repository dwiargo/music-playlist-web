import { NextPage } from 'next'
import { songData } from '@/constant/tmp-data'
import SongList from '@/components/Song/SongList/view'
import useSWR, { mutate } from 'swr'
import { TSong } from '@/components/Song/type'
import { FormEvent, SyntheticEvent, useState } from 'react'
import { Container, Form } from 'react-bootstrap'
import Jumbotron from '@/components/Jumbotron/view'
import { rapidApi } from '@/libs/htttp'

const SONG_LIST_URL = `/songs/list-recommendations?key=484129036&locale=en-US&path=favourite`
const Favourite: NextPage = (props) => {
  const [tracks, setTracks] = useState<TSong[] | null>(null)
  const [keyword, setKeyword] = useState<string>('')
  useSWR(SONG_LIST_URL, rapidApi.get, {
    onSuccess: (response: any) => {
      const preData = keyword ? response.data.tracks.filter((d: TSong) => d.title.match(new RegExp(keyword, 'ig'))) : response.data.tracks
      setTracks(prepopulateData(preData))
    },
  })

  const prepopulateData = (dataSource: any) => {
    return dataSource
      .map((d: TSong) => {
        d.isFavourite = localStorage.getItem(`fav-${d.key}`) ? true : false
        return d
      })
      .filter((d: TSong) => d.isFavourite)
  }

  const handleFavourite = (e: FormEvent) => {
    e.preventDefault()
    e.stopPropagation()

    mutate(SONG_LIST_URL)
  }

  return (
    <Container>
      <Jumbotron title="My Favourite" />
      <Form onSubmit={handleFavourite} className="mb-2 mt-2">
        <Form.Control placeholder="Type song title keyword here..." onChange={(e: any) => setKeyword(e.target.value)} />
      </Form>
      <SongList data={tracks} showAddToPlaylist />
    </Container>
  )
}

export default Favourite
