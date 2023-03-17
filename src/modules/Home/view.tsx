import { rapidApi } from "@/libs/htttp";
import { NextPage } from "next";
import { Button } from "react-bootstrap";
import useSWR from 'swr'
import { data } from './tmp-data'

const Home: NextPage = () => {
  // const { data } = useSWR(`/shazam-events/list`, rapidApi.get, {revalidateOnFocus: false})
  return (
    <div>
      <Button>This is button</Button>
    </div>
  )
}

export default Home