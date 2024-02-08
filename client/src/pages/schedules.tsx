import { ApolloProviderWrapper } from '@/components/Authentication/ApolloProviderWrapper'
import Schedules from '@/components/CalenderSection/Scheldules'
import { Box } from '@chakra-ui/react'
import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/nextjs'

const Calender = () => {
  return (
    <Box>
      <SignedIn>
        <Schedules />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </Box>
  )
}

export default Calender
