import { NextPage } from 'next'
import { songData } from '@/constant/tmp-data'
import SongList from '@/components/Song/SongList/view'
import useSWR, { mutate } from 'swr'
import { TSong } from '@/components/Song/type'
import { FormEvent, SyntheticEvent, useState } from 'react'
import { Container, Form } from 'react-bootstrap'
import Jumbotron from '@/components/Jumbotron/view'
import PlaylistSelect from '@/components/Playlist/PlaylistSelect/view'

const SONG_LIST_URL = `/songs/list-recommendations`
const Search: NextPage = (props) => {
  const [tracks, setTracks] = useState<TSong[] | null>(null)
  const [keyword, setKeyword] = useState<string>('')
  const { data } = useSWR(SONG_LIST_URL, () => Promise.resolve(songData), {
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

  const handleSearch = (e: FormEvent) => {
    e.preventDefault()
    e.stopPropagation()

    mutate(SONG_LIST_URL)
  }

  return (
    <Container>
      <Jumbotron title="Search" />
      <Form onSubmit={handleSearch} className="mb-2 mt-2">
        <Form.Control placeholder="Type search keyword here..." onChange={(e: any) => setKeyword(e.target.value)} />
      </Form>
      <SongList data={tracks} showAddToPlaylist />
    </Container>
  )
}

export default Search
