import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import HomePage from '@/components/UI/Views/HomeScreen/Index'
import Nav from '@/components/UI/NavBar/Index'

import { Box } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <div>
        <Nav />
      </div>
      <div>
        <HomePage />
      </div>
    </>
  )
}
