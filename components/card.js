import Link from 'next/link'
import styles from '../styles/Card.module.css'

const Card = ({href, src}) => {
  return (
    <div className={styles.card}>
      <Link href={href}>
        <a><img src={src} /></a>
      </Link>
    </div>
  )
}

export default Card