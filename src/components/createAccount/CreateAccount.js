import { useState } from 'react'

function CreateAccount() {
  const [user, setUser] = useState({ username: '', password: '' })

  const createUser = () => {
    if (user.username && user.password !== '') {
      localStorage.setItem(user.username, JSON.stringify(user))
    }
  }

  return (
    <>
      <input
        placeholder="username"
        value={user.username}
        onChange={(e) =>
          setUser((prevUser) => {
            return {
              //same
              ...prevUser,
              username: e.target.value,
            }
          })
        }
      />

      <input
        placeholder="password"
        value={user.password}
        onChange={(e) =>
          setUser((prevUser) => {
            return {
              ...prevUser,
              password: e.target.value,
            }
          })
        }
      />

      <button onClick={createUser}>Create Account</button>
    </>
  )
}

export default CreateAccount
