import { useEffect } from 'react'

const useChangeTitle = (newTitle) => {
  useEffect(() => {
    document.title = newTitle
    return () => {
      document.title = 'Tank SHOP'
    }
  }, [newTitle])
}

export default useChangeTitle
