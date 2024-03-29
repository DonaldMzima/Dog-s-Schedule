import Schedules from '@/components/CalenderSection/Scheldules/Schedule_UI'
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
