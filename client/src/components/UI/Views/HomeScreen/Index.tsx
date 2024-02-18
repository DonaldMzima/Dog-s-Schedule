/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import {
  Heading,
  Container,
  Text,
  Stack,
  Box,
  Center,
  useColorModeValue,
  useMediaQuery,
  Button,
  Link,
} from '@chakra-ui/react'
import { MdArrowForward } from 'react-icons/md'
import SvgComponent from '@/components/Svg/HomeSvg'
import NavigationBar from '../../2ndNavBar/Index'
import Footer from '../../Footer'

const HomePage = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)')
  return (
    <>
      <Container
        maxW={'100%'}
        minHeight="100vh"
        bgGradient={useColorModeValue(
          ['linear(to-b, white, yellow)'],
          ['linear(to-b, #8f8e8e, #4e4e4e.900)'],
        )}
      >
        {/* {!isMobile && <Nav />} */}
        <Stack
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 16, md: 24 }}
          marginTop={{ base: 0, md: 8 }}
          color={useColorModeValue('#182d47', '#fafaf7')}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
          >
            Dog's Walking <br />
            <Text as={'span'} color={useColorModeValue('#20201c', '#f3f3e3')}>
              Schedule
            </Text>
          </Heading>
          <Text fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}>Ruh roh</Text>
          {isMobile ? (
            <Text>
              Regular exercise with your pet is <br />
              good for both your health and your <br />
              dog's health and can be great fun. <br />
              There's nothing like an exercise partner who's waiting by the door
              with <br />a wagging tail to keep you motivated!
            </Text>
          ) : (
            <Text>
              Regular exercise with your pet is good for both your health and
              your dog's health and can be great fun. There's nothing like an
              <br />
              exercise partner who's waiting by the door with a wagging tail to
              keep you motivated!
            </Text>
          )}
          <Center textAlign={'center'}>
            <Link href="/schedules">
              <Button
                bg={useColorModeValue('black', 'gray.600')}
                color="white"
                cursor="pointer"
                size="lg"
                mr={4}
              >
                Get Started
              </Button>
            </Link>
            <Link href="/learnMorePage">
              <Button
                bg={useColorModeValue('black', 'gray.600')}
                color="white"
                cursor="pointer"
                size="lg"
                rightIcon={<MdArrowForward />}
              >
                Learn More
              </Button>
            </Link>
          </Center>
          <Center textAlign={'center'}>
            <SvgComponent />
          </Center>
        </Stack>
        {isMobile && <NavigationBar />}
        <Box mb={0}>{!isMobile && <Footer />}</Box>
      </Container>
    </>
  )
}

export default HomePage
