import Jumbotron from '@/components/Jumbotron/view'
import PlaylistForm from '@/components/Playlist/PlaylistForm'
import { TPlaylist } from '@/components/Playlist/type'
import { USER_PLAYLIST_STORAGE_KEY } from '@/constant/env'
import { NextPage } from 'next'
import { FormEvent, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import useSWR, { mutate } from 'swr'
import { cssPlaylist } from './style'
import PlaylistCard from '@/components/Playlist/PlaylistCard'
import PlaylistList from '@/components/Playlist/PlaylistList/view'
import PlaylistDetail from '@/components/Playlist/PlaylistDetail'

const PLAYLIST_URL = '/user-playlist'
const Playlist: NextPage = () => {
  const [showForm, setShowForm] = useState<boolean>(false)
  const [keyword, setKeyword] = useState<string>('')
  const [selectedPlaylist, setSelectedPlaylist] = useState<TPlaylist | null>(null)
  const [showDetail, setShowDetail] = useState<boolean>(false)

  const { data } = useSWR(
    PLAYLIST_URL,
    () =>
      new Promise((resolve) => {
        const storageData: string | null = localStorage.getItem(USER_PLAYLIST_STORAGE_KEY)
        const preData: TPlaylist[] = storageData ? JSON.parse(storageData) : []
        const result = keyword ? preData.filter((d: TPlaylist) => d.name.match(new RegExp(keyword, 'ig'))) : preData
        resolve(result)
      })
  )

  const handleSearch = (e?: FormEvent | null) => {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }

    mutate(PLAYLIST_URL)
  }

  return (
    <main css={cssPlaylist}>
      <Container>
        <Jumbotron title="My Playlist" />
        <header className="mb-2 mt-2">
          <Form onSubmit={handleSearch}>
            <Form.Control placeholder="Type search keyword here..." onChange={(e: any) => setKeyword(e.target.value)} />
          </Form>
          <Button onClick={() => setShowForm(true)}>Add</Button>
        </header>
        <PlaylistList
          data={data as TPlaylist[]}
          onSelected={(p: TPlaylist) => {
            setSelectedPlaylist(p)
            setShowDetail(true)
          }}
        />
      </Container>
      <PlaylistForm
        show={showForm}
        onHide={() => {
          setShowForm(false)
          handleSearch()
        }}
      />
      <PlaylistDetail
        data={selectedPlaylist || undefined}
        show={showDetail}
        onHide={(reload?: boolean) => {
          setShowDetail(false)
          setTimeout(setSelectedPlaylist, 500)
          if (reload) mutate(PLAYLIST_URL)
        }}
      />
    </main>
  )
}

export default Playlist
