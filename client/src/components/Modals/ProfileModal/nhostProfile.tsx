import { Button } from '@chakra-ui/react'
import {
  useAuthenticated,
  useSignInEmailPassword,
  useSignOut,
} from '@nhost/nextjs'
import { useState } from 'react'

const Auth = () => {
  const [isAuth, setIsAuth] = useState(false)
  const { signInEmailPassword } = useSignInEmailPassword()
  const signOut = useSignOut()

  const handleSignIn = async () => {
    await signInEmailPassword('donaldmzima8@gmail.com', 'Donald@99_')
    setIsAuth(true)
    console.log('User is signed in')
  }

  const handleSignOut = async () => {
    await signOut.signOut()
    setIsAuth(false)
    console.log('User is signed out')
  }

  return (
    <div>
      {isAuth ? (
        <Button onClick={handleSignOut}>Sign Out</Button>
      ) : (
        <Button onClick={handleSignIn}>Sign In</Button>
      )}
    </div>
  )
}

export default Auth
