import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Button, useColorMode, Center } from '@chakra-ui/react'
import DarkModeSvg from './DarkModeSvg'

export const DarkMode = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  const handleToggle = () => {
    toggleColorMode()
  }
  return (
    <header>
      <Center>
        <Button
          onClick={handleToggle}
          w="50%"
          m={[1, 15]}
          mr={2}
          colorScheme="gray"
        >
          {colorMode === 'dark' ? (
            <>
              <MoonIcon />
              Dark Mode
            </>
          ) : (
            <>
              <SunIcon />
              Light Mode
            </>
          )}
        </Button>
      </Center>

      <Center mt="60%">
        <DarkModeSvg />
      </Center>
    </header>
  )
}
