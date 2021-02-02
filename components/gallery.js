import Card from './card'
import styles from '../styles/Gallery.module.css'

const Gallery = ({photos}) => {
  return (
    <div className={styles.gallery}>
      {photos.map(photo => (
        <Card 
          src={photo.thumbnailUrl}
          href={`/photo?id=${photo.id}`}
          key={photo.id}
        />
      ))}
    </div>
  )
}

export default Gallery