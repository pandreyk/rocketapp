import { useEffect, useState } from 'react'
import Loader from '../components/loader'

export const useData = (serverData, url) => {
  const [data, setData] = useState(serverData)

  useEffect(async () => {
    if(!serverData){
      const json = await fetch(url).then(res => res.json())
      setData(json)
    }
  }, [])

  return [data, <Loader />]
}
