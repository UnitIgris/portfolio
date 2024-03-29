import Head from 'next/head'
import Navbar from '../navbar'
import { Box, Container } from '@chakra-ui/react'

import dynamic from 'next/dynamic'
import VoxelRoomLoader from '../voxel-room-loader'

const LazyVoxelRoom = dynamic(() => import('../voxel-room'), {
  ssr: false,
  loading: () => <VoxelRoomLoader />,
})
const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta
          name="viewport"
          content="width = device-width, initial-scale = 1"
        />
        <title>Samuel Lunion - Homepage</title>
      </Head>
      <Navbar path={router.asPath} />

      {/* maxW="container.2xl" */}
      
      <Box p={6} pt={[24, 28, 36]}>
        <LazyVoxelRoom />
        {children}
      </Box>
    </Box>
  )
}

export default Main
