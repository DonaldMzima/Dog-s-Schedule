/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-page-custom-font */
import React from 'react'

import Head from 'next/head'
import {
  Heading,
  Container,
  Text,
  Stack,
  Box,
  Center,
  Link,
} from '@chakra-ui/react'
import { RiHome4Fill } from 'react-icons/ri'
import { BsCalendarPlus } from 'react-icons/bs'
import { MdSettings } from 'react-icons/md'

import SvgComponent from '@/components/Svg/HomeSvg'

export default function HomePage() {
  return (
    <>
      <Container
        maxW={'100%'}
        minHeight="100vh"
        bgGradient={['linear(to-b, white, yellow)']}
      >
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
          color={'#1f2b3a'}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
          >
            Dog's Walking <br />
            <Text as={'span'} color={'#20201c'}>
              Schedule
            </Text>
          </Heading>
          <Text fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}>Ruh roh</Text>
          <Text>
            Regular exercise with your pet is <br />
            good for both your health and your
            <br />
            dog's health and can be great fun.
            <br /> There's nothing like an exercise partner who's waiting by the
            door with
            <br /> a wagging tail to keep you motivated!
          </Text>
          <Center textAlign={'center'}>
            <SvgComponent />
          </Center>
        </Stack>
        <Center>
          <Stack
            direction={'row'}
            color="black"
            spacing={{ base: 20, sm: 155 }}
            ml={{ base: 25, sm: 50 }}
            mt={{ base: -150, sm: -120 }}
          >
            <Link href="/">
              <Box mb={4}>
                <RiHome4Fill size={'3em'} />
              </Box>
            </Link>
            <Link href="/calender">
              <Box mb={4}>
                <BsCalendarPlus size={'3em'} />
              </Box>
            </Link>
            <Link href="/settings">
              <Box mb={4}>
                <MdSettings size={'3em'} />
              </Box>
            </Link>
          </Stack>
        </Center>
      </Container>
    </>
  )
}
