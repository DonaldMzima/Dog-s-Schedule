/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useSignInEmailPassword } from '@nhost/nextjs'
import { Box, Button, Input, Link, Text } from '@chakra-ui/react'

import CustomSpinner from '@/components/CalenderSection/Spinner'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()

  const {
    signInEmailPassword,
    isLoading,
    isSuccess,
    needsEmailVerification,
    isError,
    error,
  } = useSignInEmailPassword()

  const handleOnSubmit = async (e: any) => {
    e.preventDefault()
    await signInEmailPassword(email, password)
  }

  if (isSuccess) {
    router.push('/')
    return null
  }

  const disableForm = isLoading || needsEmailVerification

  return (
    <Box p={4} maxWidth="400px" margin="auto">
      <Box bg="white" boxShadow="md" p={8} borderRadius="md">
        <Box mb={4} textAlign="center">
          <img src="/logo.svg" alt="logo" width={100} height={100} />
        </Box>

        {needsEmailVerification ? (
          <Text textAlign="center" mb={4}>
            Please check your mailbox and follow the verification link to verify
            your email.
          </Text>
        ) : (
          <form onSubmit={handleOnSubmit}>
            <Input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
              disabled={disableForm}
              mb={4}
              isRequired
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
              disabled={disableForm}
              mb={4}
              isRequired
            />

            <Button
              type="submit"
              disabled={disableForm}
              isLoading={isLoading}
              loadingText="Signing in"
              colorScheme="teal"
              mb={4}
            >
              Sign in
            </Button>

            {isError && (
              <Text color="red.500" mb={4} textAlign="center">
                {error?.message}
              </Text>
            )}
          </form>
        )}

        <Text textAlign="center">
          No account yet?{' '}
          <Link href="/signUp">
            <a>Sign up</a>
          </Link>
        </Text>
      </Box>
    </Box>
  )
}

export default SignIn
