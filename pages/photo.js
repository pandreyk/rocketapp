import { useData } from '../hooks/data.hook'
import { useRouter } from 'next/router'
import Layout from '../components/layout'

export default function Photo({data: serverData}) {
  const router = useRouter()
  const [photo, loader] = useData(serverData, `/api/photo?id=${router.query.id}`)

  if (!photo) return loader

  return (
    <Layout title={`Photos | ${photo.title}`}>
      <h4>{photo.title}</h4>
      <hr />

      <img src={photo.url} />
    </Layout>
  )
}

Photo.getInitialProps = async ({req, query}) => {
  let data = null
  
  if(req) 
    data = await fetch(`${process.env.API_ADDRESS}/api/photo?id=${query.id}`).then(res => res.json())

  return { data }
}
