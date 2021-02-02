import { useData } from '../../hooks/data.hook'
import { useRouter } from 'next/router'
import Layout from '../../components/layout'
import Comments from '../../components/comments'

export default function Id({data: serverData}) {
  const router = useRouter()
  const [data, loader] = useData(serverData, `/api/posts/${router.query.id}`)

  if (!data) return loader

  return (
    <Layout title={`Posts | ${data.post.title}`}>
      <div>
        <h5>{data.post.title}</h5>
        <p>{data.post.body}</p>
        <br/><hr /> 
        <h5>Comments</h5>
        <Comments comments={data.comments} />
      </div>
    </Layout>
  )
}

Id.getInitialProps = async ({req, query}) => {
  let data = null
  
  if(req) 
    data = await fetch(`${process.env.API_ADDRESS}/api/posts/${query.id}`).then(res => res.json())

  return { data }
}
