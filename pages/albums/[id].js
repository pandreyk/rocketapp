import { useData } from '../../hooks/data.hook'
import { useRouter } from 'next/router'
import Layout from '../../components/layout'
import Gallery from '../../components/gallery'

export default function Id({data: serverData}) {
  const router = useRouter()
  const [data, loader] = useData(serverData, `/api/albums/${router.query.id}`)

  if (!data) return loader

  return (
    <Layout title={`Albums | ${data.album.title}`}>
      <h4>{data.album.title}</h4>
      <hr />
      <Gallery photos={data.photos} />
    </Layout>
  )
}

Id.getInitialProps = async ({req, query}) => {
  let data = null
  
  if(req) 
    data = await fetch(`${process.env.API_ADDRESS}/api/albums/${query.id}`).then(res => res.json())

  return { data }
}
