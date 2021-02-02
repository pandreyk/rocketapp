import styles from '../styles/Loader.module.css'
import Navbar from './navbar'

const Loader = () => {
  return (
    <>
      <Navbar />
      <div className={styles.loader} />
    </>
  )
}

export default Loader