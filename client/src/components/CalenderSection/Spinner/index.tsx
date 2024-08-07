import {
  Spinner,
  Stack,
  Text,
  Box,
  useMediaQuery,
  useColorModeValue,
} from '@chakra-ui/react'
import { CustomSpinnerType } from 'utilis/types'
import Nav from '@/components/UI/Navbar/Mobile_NavBar/Index'
import NavigationBar from '@/components/UI/Navbar/Desktop_NavBar/Index'

const CustomSpinner = ({ text }: CustomSpinnerType) => {
  const [isMobile] = useMediaQuery('(max-width: 768px)')
  return (
    <>
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        bottom={0}
        zIndex="1000" // Ensure it's above other elements
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgGradient="cover+"
      >
        {!isMobile && <Nav />}
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
          <Text>{text}</Text>
        </Stack>
      </Box>
      {isMobile && <NavigationBar />}
    </>
  )
}

export default CustomSpinner
