import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { RecoilRoot , selector,
  useRecoilState,
  useRecoilValue,} from 'recoil'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>

    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
    <RecoilRoot/>

  )
}
