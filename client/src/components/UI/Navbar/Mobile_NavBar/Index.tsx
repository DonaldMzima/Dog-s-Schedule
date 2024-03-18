import { DarkMode } from '@/components/DarkMode'
import SettingDrawer from '@/components/Settings'
import {
  Box,
  Button,
  Center,
  Flex,
  Link,
  Stack,
  IconButton,
  useColorModeValue,
  useMediaQuery,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { SetStateAction, useState } from 'react'
import { FiBell } from 'react-icons/fi'
import FloatingButtons from '../../Buttons/Index'
import { RiHome4Fill } from 'react-icons/ri'

const NavBar = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)')
  const [activeButton, setActiveButton] = useState('')

  const router = useRouter()

  const handleButtonClick = (path: SetStateAction<string>) => {
    setActiveButton(path)
  }

  return (
    <>
      <Box
        ml={{ base: 0, md: 60 }}
        px={{ base: 4, md: 4 }}
        height="20"
        alignItems="center"
        bg={useColorModeValue('white', 'gray.900')}
        borderBottomWidth="1px"
        pos="fixed"
        top={0}
        zIndex={1}
        left={0}
        right={0}
        justifyContent="center"
      >
        {/* Logo */}

        <Stack
          direction="row"
          spacing={31}
          alignItems="center"
          justify="flex-end"
          mt={17}
        >
          <Link
            href="/"
            borderBottom={router.pathname === '/' ? '2px solid black' : 'none'}
          >
            <IconButton size="md" variant="ghost" aria-label="open menu">
              <RiHome4Fill size={30} />
            </IconButton>
          </Link>

          <IconButton
            size="md"
            variant="ghost"
            aria-label="open menu"
            icon={<FiBell size={30} />}
          />

          <DarkMode />
        </Stack>
      </Box>
    </>
  )
}

export default NavBar
