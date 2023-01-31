import HomePage from '@/components/UI/Views/HomeScreen/Index'
import { Container, useMediaQuery } from '@chakra-ui/react'
import Nav from '@/components/UI/NavBar/Index'
import NavigationBar from '@/components/UI/2ndNavBar/Index'
export default function Home() {
  const [isMobile] = useMediaQuery('(max-width: 768px)')
  return (
    <>
      {/* {!isMobile ?   <Nav /> : null } */}
      {!isMobile && <Nav />}
      <Container>
        <div>
          <HomePage />
        </div>
      </Container>
      {isMobile && <NavigationBar />}
    </>
  )
}
