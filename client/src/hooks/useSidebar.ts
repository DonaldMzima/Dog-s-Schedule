import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { useColorMode } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { showCompletedState, openFeedbackModal } from '@/store/atoms'
import { useClerk } from '@clerk/nextjs'

const useSidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showCompleted, setShowCompleted] = useRecoilState(showCompletedState)
  const [Feedback, setFeedbackModal] = useRecoilState(openFeedbackModal)
  const [_, setIsProfileModalOpen] = useState(false)
  const { signOut } = useClerk()
  const router = useRouter()
  const { colorMode } = useColorMode()

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const openProfileModal = () => {
    setIsProfileModalOpen(true)
  }

  const Completedtasks = () => {
    setShowCompleted(!showCompleted)
  }

  const openFeedModal = () => {
    setFeedbackModal(true)
  }

  const handleSignOut = () => {
    signOut(() => router.push('/'))
  }

  return {
    isOpen,
    showCompleted,
    Feedback,
    colorMode,
    toggleSidebar,
    openProfileModal,
    Completedtasks,
    openFeedModal,
    handleSignOut,
    setFeedbackModal,
  }
}

export default useSidebar
