import { useData } from '../hooks/data.hook'
import Link from 'next/link'
import Layout from '../components/layout'
import Slider from 'react-slick'
import Card from '../components/card'
import styles from '../styles/Home.module.css'

export default function Home({data: serverData}) {
  const [data, loader] = useData(serverData, '/api/home')

  if (!data) return loader

  return (
    <Layout title='Home'>
      <div className={styles.sliderContainer}>
        <h5>Posts</h5>
        <Slider 
          infinite={true}
          speed={500}
          slidesToShow={3}
          slidesToScroll={3}
        >
            {
              data.posts.map(post => (
                <Link href={`/posts/[id]?id=${post.id}`} key={post.id}>
                  <a>
                    <p className='large'>{post.title}</p>
                    <p className={styles.dotes}>{post.body}</p>
                  </a>
                </Link>
              ))
            }
        </Slider>
        <hr />
      </div>

      <div className={styles.sliderContainer}>
        <h5>Photos</h5>
        <Slider 
          infinite={true}
          speed={500}
          slidesToShow={6}
          slidesToScroll={3}
        >
          {
            data.photos.map(photo => (
              <div className={styles.sliderContent} key={photo.id}>
                <Card 
                  src={photo.thumbnailUrl}
                  href={`/photo?id=${photo.id}`}
                />
              </div>
            ))
          }
        </Slider>
        <hr />
      </div>
    </Layout>
  )
}

Home.getInitialProps = async ({req}) => {
  let data = null

  if(req) 
    data = await fetch(`${process.env.API_ADDRESS}/api/home`).then(res => res.json())

  return { data }
}