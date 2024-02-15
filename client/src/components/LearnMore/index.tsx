// pages/learn-more.tsx

import React from 'react'
import {
  Box,
  Heading,
  Text,
  useMediaQuery,
  Container,
  useColorModeValue,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
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
    <>
      {/* {!isMobile && <Nav />} */}
      <Container
        maxW={'100%'}
        minHeight="100vh"
        justifyContent="center"
        bottom={0}
        bgGradient={useColorModeValue(
          ['linear(to-b, white, yellow)'],
          ['linear(to-b, #8f8e8e, #4e4e4e.900)'],
        )}
        display="flex"
      >
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
            Regular walking is crucial for a dog`s physical and mental health.
            It provides exercise, mental stimulation, socialization, and helps
            prevent behavioral problems.
          </Text>
          <Heading as="h2" mt={4}>
            Benefits of Walking Your Dog
          </Heading>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Improves cardiovascular health
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Walking your dog helps improve cardiovascular health by
                increasing heart rate and blood circulation.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Controls weight and prevents obesity
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Regular walks help control weight and prevent obesity by burning
                calories and keeping your dog active.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Strengthens muscles and joints
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Walking exercises various muscles and joints, promoting strength
                and flexibility.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Reduces stress and anxiety
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Regular walks help reduce stress and anxiety by releasing
                endorphins and providing mental stimulation.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Enhances the bond between you and your dog
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Walking together strengthens the bond between you and your dog
                through shared experiences and quality time spent together.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Heading as="h2" mt={4}>
            Psychological Benefits
          </Heading>
          <Text mt={2}>
            Walking also has psychological benefits for both the dog and the
            owner. It can reduce boredom, decrease destructive behavior, and
            increase overall happiness and well-being.
          </Text>
        </Box>
      </Container>
    </>
  )
}

export default LearnMorePage
