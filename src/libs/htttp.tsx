import { RAPID_API_HOST, RAPID_API_KEY, RAPID_API_URL } from '@/constant/env'
import axios from 'axios'

export const rapidApi = axios.create({
  baseURL: RAPID_API_URL,
  timeout: 15000,
  withCredentials: false
})

rapidApi.interceptors.request
.use((config:any) => {
  config.headers = { 
    ...config.headers,
    'X-RapidAPI-Key': RAPID_API_KEY,
    'X-RapidAPI-Host': RAPID_API_HOST
  }

  return config
})

rapidApi.interceptors.response.use(
  (response) => {
    if (response.data.status) {
      if (response.data.status === 200) response.data = response.data?.data || response.data
      else return Promise.reject(new Error(response.data.message))
    }

    return response
  },
  async (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)
