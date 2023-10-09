import HomePage from '@/components/UI/Views/HomeScreen/Index'
import { Box, useMediaQuery } from '@chakra-ui/react'
import Nav from '@/components/UI/NavBar/Index'
import NavigationBar from '@/components/UI/2ndNavBar/Index'

const Home = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)')
  return (
    <>
      {/* {!isMobile ?   <Nav /> : null } */}
      {!isMobile && <Nav />}

      <Box>
        <HomePage />
      </Box>

      {isMobile && <NavigationBar />}
    </>
  )
}

export default Home
