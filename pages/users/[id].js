import { useData } from '../../hooks/data.hook'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '../../components/layout'
import Tabs from '../../components/tabs'
import styles from '../../styles/Users.module.css'

export default function Id({data: serverData}) {
  const router = useRouter()
  const [data, loader] = useData(serverData, `/api/users/${router.query.id}`)

  const tabAlbums = () => {
    return(
      data.albums.map(album => (
        <p key={album.id}>
          <Link href={`/albums/[id]?id=${album.id}`}>
            <a>{album.title}</a>
          </Link>
        </p>
      ))
    )
  }

  const tabPosts = () => {
    return(
      data.posts.map(post => (
        <p key={post.id}>
          <Link href={`/posts/[id]?id=${post.id}`}>
            <a>{post.title}</a>
          </Link>
        </p>
      ))
    )
  }

  if (!data) return loader

  return (
    <Layout title={`Users | ${data.user.username}`}>
      <div className={styles.userContainer}>
        <div className={styles.userTabs}>
          <Tabs 
            albums={tabAlbums()}
            posts={tabPosts()} 
          />
        </div>

        <div className={styles.userProfile}>
          <h3>{data.user.username}</h3>
          <div className={styles.userInfo}>
            <div className={styles.userBio}>
              <div>
                <p className='large'>{data.user.name}</p>
                <p>{data.user.email}</p>
                <p>{data.user.phone}</p>
                <p><a href={`https://${data.user.website}`} target='_blank'>{data.user.website}</a></p>
              </div>
              <div>
                <p className='large'>Company</p>
                <p>{data.user.company.name}</p>
                <p>{data.user.company.catchPhrase}</p>
                <p>{data.user.company.bs}</p>
              </div>
            </div>
            <div className={styles.userAddress}>
              <div>
                <p className='large'>Address</p>
                <p>City: {data.user.address.city}</p>
                <p>Street: {data.user.address.street}</p>
                <p>Suite: {data.user.address.suite}</p>
                
                <p>ZIP code: {data.user.address.zipcode}</p>
                <p>Geo</p>
                <p>lat: {data.user.address.geo.lat}</p>
                <p>lng: {data.user.address.geo.lng}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

Id.getInitialProps = async ({req, query}) => {
  let data = null
  
  if(req) 
    data = await fetch(`${process.env.API_ADDRESS}/api/users/${query.id}`).then(res => res.json())

  return { data }
}
