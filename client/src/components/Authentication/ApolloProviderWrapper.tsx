import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  from,
  InMemoryCache,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { useAuth } from '@clerk/nextjs'
import { useMemo } from 'react'

export const ApolloProviderWrapper = ({ children }: any) => {
  const { getToken } = useAuth()
  const apolloClient = useMemo(() => {
    const authMiddleware = setContext(async (req, { headers }) => {
      const token = await getToken({ template: 'dog-schedule' })

      return {
        headers: {
          ...headers,
          authorization: `Bearer ${token}`,
        },
      }
    })

    const httpLink = new HttpLink({
      uri: process.env.GRAPHQL_URI,
    })

    return new ApolloClient({
      link: from([authMiddleware, httpLink]),
      cache: new InMemoryCache(),
    })
  }, [getToken])

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
}
