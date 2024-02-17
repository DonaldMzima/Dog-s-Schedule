import ScrollToTopButton from '@/components/UI/Buttons/ScrollToTopButton'
import HomePage from '@/components/UI/Views/HomeScreen/Index'
import { Box } from '@chakra-ui/react'

const Home = () => {
  return (
    <>
      <Box>
        <ScrollToTopButton />
        <HomePage />
      </Box>
    </>
  )
}

export default Home

// import HomePage from '@/components/UI/Views/HomeScreen/Index'
// import { Box } from '@chakra-ui/react'
// import withAuth from 'Authentication/WithAuth'
// import { FC } from 'react'

// const Home: FC = () => {
//   return (
//     <>
//       <Box>
//         <HomePage />
//       </Box>
//     </>
//   )
// }

// export default withAuth(Home)
