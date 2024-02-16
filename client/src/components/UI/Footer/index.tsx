import React from 'react'
import { Box, Text } from '@chakra-ui/react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <Box as="footer" textAlign="center" py={4}>
      <Text>Developed by Donald Mzima @{currentYear}</Text>
    </Box>
  )
}

export default Footer
