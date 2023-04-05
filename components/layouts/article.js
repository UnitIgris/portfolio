import { motion } from 'framer-motion'
import Head from 'next/head'

const Layout = ({ children, title }) => {
  const t = `${title} - Samuel Lunion`
  return (
    <motion.article
      transition={{ duration: 0.4, type: 'easeInOut' }}
      //style={{ position: 'relative' }}
    >
      <>
        {title && (
          <Head>
            <title>{t}</title>
          </Head>
        )}
        {children}
      </>
    </motion.article>
  )
}

export default Layout
