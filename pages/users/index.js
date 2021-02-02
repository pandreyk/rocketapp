import { useData } from '../../hooks/data.hook'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function Users({data: serverData}) {
  const [data, loader] = useData(serverData, '/api/users')

  if (!data) return loader

  return (
    <Layout title='Users'>
      <div className='pageContainer'>
        <div className='fixed'><h5>All users:</h5></div>
        <div className='padForContent'>
          {
            data.map(user => (
              <p key={user.id}>
                <Link href={`/users/[id]?id=${user.id}`}>
                  <a>{user.name}</a>
                </Link>
              </p>
            ))
          }
        </div>
      </div>
    </Layout>
  )
}

Users.getInitialProps = async ({req}) => {
  let data = null

  if(req)
    data = await fetch(`${process.env.API_ADDRESS}/api/users`).then(res => res.json())

  return { data }
}
