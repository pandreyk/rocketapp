import { useData } from '../../hooks/data.hook'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function Posts({data: serverData}) {
  const [data, loader] = useData(serverData, '/api/posts')

  if (!data) return loader

  return (
    <Layout title='Posts'>
      <div className='pageContainer'>
        <div className='fixed'><h5>All posts:</h5></div> 
        <div className='padForContent'>
          {
            data.map(post => (
              <p key={post.id}>
                <Link href={`/posts/[id]?id=${post.id}`}>
                  <a>{post.title}</a>
                </Link>
              </p>
            ))
          }
        </div>
      </div>
    </Layout>
  )
}

Posts.getInitialProps = async ({req}) => {
  let data = null

  if(req) 
    data = await fetch(`${process.env.API_ADDRESS}/api/posts`).then(res => res.json())

  return { data }
}
