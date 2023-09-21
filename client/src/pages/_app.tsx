import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { UserProvider } from '../UserProvider'
// highlight-start
import { NhostProvider, NhostClient } from '@nhost/nextjs'
// highlight-end
import { RecoilRoot } from 'recoil'

const queryClient = new QueryClient()

// highlight-start
const nhost = new NhostClient({
  subdomain: process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN || '',
  region: process.env.NEXT_PUBLIC_NHOST_REGION || '',
})
// highlight-end

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NhostProvider nhost={nhost} initial={pageProps.nhostSession}>
      <UserProvider>
        <QueryClientProvider client={queryClient}>
          <ChakraProvider>
            <RecoilRoot>
              <Component {...pageProps} minHeight="100vh" />
            </RecoilRoot>
          </ChakraProvider>
        </QueryClientProvider>
      </UserProvider>
      {/* highlight-next-line */}
    </NhostProvider>
  )
}
