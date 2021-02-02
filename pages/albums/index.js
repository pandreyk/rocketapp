import { useData } from '../../hooks/data.hook'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function Albums({data: serverData}) {
  const [data, loader] = useData(serverData, '/api/albums')

  if (!data) return loader

  return (
    <Layout title='Albums'>
      <div className='pageContainer'>
      <div className='fixed'><h5>All albums:</h5></div>
        <div className='padForContent'>
          {
            data.map(album => (
              <p key={album.id}>
                <Link href={`/albums/[id]?id=${album.id}`}>
                  <a>{album.title}</a>
                </Link>
              </p>
            ))
          }
        </div>
      </div>
    </Layout>
  )
}

Albums.getInitialProps = async ({req}) => {
  let data = null

  if(req) 
    data = await fetch(`${process.env.API_ADDRESS}/api/albums`).then(res => res.json())

  return { data }
}
