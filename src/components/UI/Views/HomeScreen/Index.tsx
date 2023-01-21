/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-page-custom-font */
import React from 'react'

import Head from 'next/head'
import {
  Heading,
  Container,
  Text,
  Stack,
  createIcon,
  Box,
  Center,
} from '@chakra-ui/react'
import SvgComponent from '@/components/Svg/HomeSvg'

export default function HomePage() {
  return (
    <>
      <Container
        maxW={'9xl'}
        height="999px"
        bgGradient={['linear(to-b, white, yellow)']}
      >
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
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
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        ></Stack>
      </Container>
    </>
  )
}
