/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Center,
  Box,
  useMediaQuery,
} from '@chakra-ui/react'
import { DarkMode } from '../DarkMode'
import { MdSettings } from 'react-icons/md'

function SettingDrawer({ children, ...rest }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const [isMobile] = useMediaQuery('(max-width: 768px)')

  return (
    <>
      {isMobile ? (
        <Button
          onClick={onOpen}
          size="md"
          height="48px"
          width="100px"
          color="black"
          bg={'transparent'}
        >
          <Box>
            <MdSettings size={'3em'} />
          </Box>
        </Button>
      ) : (
        <Button
          onClick={onOpen}
          size="md"
          height="48px"
          width="100px"
          color={useColorModeValue('#fafaf7', '#1f1f1a')}
          bg={useColorModeValue('#1f1f1a', ' #fafaf7')}
        >
          Settings
        </Button>
      )}
      <Drawer
        variant="alwaysOpen"
        {...rest}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        trapFocus={false}
        closeOnOverlayClick={false}
        blockScrollOnMount={false}
      >
        {/* <DrawerOverlay /> */}
        <DrawerContent bg={useColorModeValue('white', 'gray.900')}>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <DarkMode />
          </DrawerBody>

          <DrawerFooter>
            <Center>
              <Button variant="outline" mr={3} onClick={onClose}>
                Close
              </Button>
            </Center>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default SettingDrawer
