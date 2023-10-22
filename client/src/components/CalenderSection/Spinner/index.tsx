import { Spinner, Stack, Text, Box, useMediaQuery } from '@chakra-ui/react' // Import Box component
import { CustomSpinnerType } from 'utilis/types'
import Nav from '@/components/UI/NavBar/Index'
import NavigationBar from '@/components/UI/2ndNavBar/Index'

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
        bgGradient={['linear(to-b, white, yellow)']}
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
