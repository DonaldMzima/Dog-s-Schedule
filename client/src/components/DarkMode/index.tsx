import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Box, Button, useColorMode, useColorModeValue } from '@chakra-ui/react'

export const DarkMode = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  const handleDarkModeClick = () => {
    if (colorMode === 'light') {
      toggleColorMode()
    }
  }

  const handleLightModeClick = () => {
    if (colorMode === 'dark') {
      toggleColorMode()
    }
  }

  return (
    <header>
      <Button
        onClick={handleDarkModeClick}
        w="50%"
        m={[1, 15]}
        mr={2}
        colorScheme="gray"
      >
        <MoonIcon />
        DarkMode
      </Button>
      <Box>
        <Button
          onClick={handleLightModeClick}
          w="50%"
          m={[1, 15]}
          color={useColorModeValue('black', 'whiteAlpha')}
        >
          <SunIcon />
          LightMode
        </Button>
      </Box>
    </header>
  )
}
