import { renderHook } from '@testing-library/react-hooks'
import { act } from 'react-test-renderer'
import useSidebar from '../useSidebar'

describe('useSidebar', () => {
  test('should toggle sidebar state correctly', () => {
    const { result } = renderHook(() => useSidebar())

    expect(result.current.isOpen).toBe(false)

    act(() => {
      result.current.toggleSidebar()
    })

    expect(result.current.isOpen).toBe(true)
  })

  // Add more test cases for other functions in the custom hook
})
