import LearnMorePage from '@/components/LearnMore'
import ScrollToTopButton from '@/components/UI/Buttons/ScrollToTopButton'
import { Box } from '@chakra-ui/react'

const LearnMore = () => {
  return (
    <>
      <Box>
        <ScrollToTopButton />
        <LearnMorePage />
      </Box>
    </>
  )
}

export default LearnMore
