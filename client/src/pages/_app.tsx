import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { NhostProvider, NhostClient } from '@nhost/nextjs'
import { RecoilRoot } from 'recoil'
import { UserProvider } from 'utilis/hooks/UserProvider'
import { ClerkProvider } from '@clerk/nextjs'
import Joyride, { STATUS } from 'react-joyride'
import { useState } from 'react'

export const client = new ApolloClient({
  uri: 'https://swfkedcclgqaeusybpxy.graphql.eu-central-1.nhost.run/v1',
  cache: new InMemoryCache(),
})

const nhost = new NhostClient({
  subdomain: process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN || '',
  region: process.env.NEXT_PUBLIC_NHOST_REGION || '',
})

interface MyAppProps extends AppProps {
  Component: React.ComponentType
}

const App: React.FC<MyAppProps> = ({ Component, pageProps }: MyAppProps) => {
  return (
    <NhostProvider nhost={nhost} initial={pageProps.nhostSession}>
      <UserProvider>
        <ApolloProvider client={client}>
          <ChakraProvider>
            <ClerkProvider {...pageProps}>
              <RecoilRoot>
                <Component {...pageProps} minHeight="100vh" />
                <ToastContainer position="top-right" autoClose={1000} />
              </RecoilRoot>
            </ClerkProvider>
          </ChakraProvider>
        </ApolloProvider>
      </UserProvider>
      {/* highlight-next-line */}
    </NhostProvider>
  )
}

export default App
