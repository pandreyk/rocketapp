import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerMenu}>
        <div>
          <Link href="/" >
            <a>Home</a>
          </Link>
        </div>
        <div>
          <Link href="/users">
            <a>Users</a>
          </Link>
        </div>
        <div>
          <Link href="/posts">
            <a>Posts</a>
          </Link>
        </div>
        <div>
          <Link href="/albums">
            <a>Albums</a>
          </Link>
        </div>
        </div>
      <div />
    </header>
  )
}

export default Navbar