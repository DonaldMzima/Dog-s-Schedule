import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Button, useColorMode } from '@chakra-ui/react'

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
        w="15%"
        m={[1, 15]}
        mr={2}
        colorScheme="gray"
      >
        <MoonIcon />
      </Button>
      <Button
        onClick={handleLightModeClick}
        w="15%"
        m={[1, 15]}
        colorScheme="teal"
      >
        <SunIcon />
      </Button>
    </header>
  )
}
