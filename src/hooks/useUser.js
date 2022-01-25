import { useState, useEffect } from 'react'

export const useUser = () => {
  const [currentUser, setCurrentUser] = useState({
    name: '',
    password: '',
  })
  const checkUser = () => {
    const getCurrentUser = JSON.parse(sessionStorage.getItem('currentUser'))

    if (getCurrentUser) setCurrentUser(getCurrentUser)
  }

  useEffect(() => {
    checkUser()
  }, [])

  return currentUser
}
