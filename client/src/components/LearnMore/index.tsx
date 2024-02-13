// pages/learn-more.tsx

import React from 'react'
import { Box, Heading, Text, UnorderedList, ListItem } from '@chakra-ui/react'
import { MdArrowBack } from 'react-icons/md'
import Head from 'next/head'
import Link from 'next/link'

/**
 * LearnMorePage component displays information about the importance
 * of walking dogs, exercising, and related health and psychological
 * benefits.
 * @returns React component
 */
const LearnMorePage: React.FC = () => {
  return (
    <Box p={4}>
      <Head>
        <title>Learn More - DogWalkSchedules</title>
      </Head>
      <Link href="/">
        <MdArrowBack size={24} />
        <Text ml={2} as="span">
          Back to Home
        </Text>
      </Link>
      <Heading as="h1" mt={4}>
        Why Walking Your Dog is Important
      </Heading>
      <Text mt={2}>
        Regular walking is crucial for a dog`s physical and mental health. It
        provides exercise, mental stimulation, socialization, and helps prevent
        behavioral problems.
      </Text>
      <Heading as="h2" mt={4}>
        Benefits of Walking Your Dog
      </Heading>
      <UnorderedList mt={2}>
        <ListItem>Improves cardiovascular health</ListItem>
        <ListItem>Controls weight and prevents obesity</ListItem>
        <ListItem>Strengthens muscles and joints</ListItem>
        <ListItem>Reduces stress and anxiety</ListItem>
        <ListItem>Enhances the bond between you and your dog</ListItem>
      </UnorderedList>
      <Heading as="h2" mt={4}>
        Psychological Benefits
      </Heading>
      <Text mt={2}>
        Walking also has psychological benefits for both the dog and the owner.
        It can reduce boredom, decrease destructive behavior, and increase
        overall happiness and well-being.
      </Text>
    </Box>
  )
}

export default LearnMorePage
