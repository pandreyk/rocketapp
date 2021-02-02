import Navbar from './navbar'
import Head from 'next/head'

export const Layout = ({children, title}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <main>
        {children}
      </main>
    </>
  )
}

export default Layout