import React, { useState, useEffect } from 'react'
import { Box, IconButton, useColorModeValue } from '@chakra-ui/react'
import { ChevronUpIcon } from '@chakra-ui/icons'
import { Zoom } from '@material-ui/core'

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <Zoom in={isVisible}>
      <Box position="fixed" bottom="4" right="4">
        <IconButton
          bg={useColorModeValue('black', 'gray.600')}
          color="white"
          cursor="pointer"
          icon={<ChevronUpIcon />}
          size="lg"
          aria-label="Scroll to top"
          onClick={handleClick}
        />
      </Box>
    </Zoom>
  )
}

export default ScrollToTopButton
