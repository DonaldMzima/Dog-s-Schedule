import SecondMyCalender from '@/components/CalenderSection/2ndMyCalender'
import { Box, useMediaQuery } from '@chakra-ui/react'
import MyCalender from '@/components/CalenderSection/MyCalender'

const Calender = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)')
  return <Box>{!isMobile ? <SecondMyCalender /> : <MyCalender />}</Box>
}

export default Calender
