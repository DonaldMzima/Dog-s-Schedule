/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useSignUpEmailPassword } from '@nhost/nextjs'
import { Box, Button, Input, Link, Text } from '@chakra-ui/react'
import CustomSpinner from '@/components/CalenderSection/Spinner'

const SignUp = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()

  const {
    signUpEmailPassword,
    isLoading,
    isSuccess,
    needsEmailVerification,
    isError,
    error,
  } = useSignUpEmailPassword()

  const handleOnSubmit = async (e: any) => {
    e.preventDefault()

    await signUpEmailPassword(email, password, {
      displayName: `${firstName} ${lastName}`.trim(),
      metadata: {
        firstName,
        lastName,
      },
    })
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
            <Box mb={4}>
              <Input
                placeholder="First name"
                value={firstName}
                onChange={(e: any) => setFirstName(e.target.value)}
                disabled={disableForm}
                isRequired
              />
              <Input
                placeholder="Last name"
                value={lastName}
                onChange={(e: any) => setLastName(e.target.value)}
                disabled={disableForm}
                isRequired
              />
            </Box>
            <Input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
              disabled={disableForm}
              isRequired
            />
            <Input
              type="password"
              placeholder="Create password"
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
              disabled={disableForm}
              isRequired
            />

            <Button
              type="submit"
              disabled={disableForm}
              isLoading={isLoading}
              loadingText="Creating account"
              colorScheme="teal"
              mb={4}
            >
              {isLoading ? <CustomSpinner text={''} /> : 'Create account'}
            </Button>

            {isError && (
              <Text color="red.500" mb={4} textAlign="center">
                {error?.message}
              </Text>
            )}
          </form>
        )}

        <Text textAlign="center">
          Already have an account?{' '}
          <Link href="/signIn">
            <a>Sign in</a>
          </Link>
        </Text>
      </Box>
    </Box>
  )
}

export default SignUp
