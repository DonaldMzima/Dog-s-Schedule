import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import HomePage from '@/components/UI/Views/HomeScreen/Index'
import Nav from '@/components/UI/NavBar/Index'

const inter = Inter({ subsets: ['latin'] })

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
