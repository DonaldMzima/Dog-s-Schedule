import React, { useEffect } from 'react'
import { Spinner } from '@chakra-ui/react'
import styles from './styles/pages/ProtectedRoute.module.css'
import { useRouter } from 'next/router'
import { useAuthenticationStatus } from '@nhost/nextjs'

interface AuthProtectedProps {
  // Define any additional props that your wrapped component may receive
}

interface WithAuthProps {
  // Define any additional props that your HOC may receive
}

export default function withAuth<P>(
  WrappedComponent: React.ComponentType<P & AuthProtectedProps>,
) {
  return function AuthProtected(props: P & WithAuthProps) {
    const router = useRouter()
    const { isLoading, isAuthenticated } = useAuthenticationStatus()

    useEffect(() => {
      if (isLoading) {
        // You may want to handle loading state differently
        return
      }

      if (!isAuthenticated) {
        router.push('/sign-in')
      }
    }, [isLoading, isAuthenticated, router])

    if (isLoading) {
      return (
        <div className={styles.container}>
          <Spinner size="xl" color="blue.500" />
        </div>
      )
    }

    if (!isAuthenticated) {
      return null // or a loading state if you prefer
    }

    return <WrappedComponent {...props} />
  }
}
