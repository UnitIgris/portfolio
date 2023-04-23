import { motion } from 'framer-motion'
import Head from 'next/head'
import { useLayoutEffect } from 'react'

const Layout = ({ children, title }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const t = `${title} - Samuel Lunion`
  return (
    <motion.article
      transition={{ duration: 0.4, type: 'easeInOut' }}
      style={{ position: 'relative' }}
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
