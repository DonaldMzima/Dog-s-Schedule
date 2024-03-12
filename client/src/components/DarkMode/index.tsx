import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Button, useColorMode, Center, IconButton } from '@chakra-ui/react'
import DarkModeSvg from './DarkModeSvg'

export const DarkMode = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  const handleToggle = () => {
    toggleColorMode()
  }
  return (
    <Center>
      <IconButton
        onClick={handleToggle}
        size="md"
        variant="ghost"
        aria-label="open menu"
      >
        {colorMode === 'dark' ? (
          <>
            <SunIcon boxSize={8} />
          </>
        ) : (
          <>
            <MoonIcon boxSize={5} />
          </>
        )}
      </IconButton>
    </Center>
  )
}
