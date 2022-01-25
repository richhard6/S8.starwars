import { useState } from 'react'

function Login() {
  const [user, setUser] = useState({ name: '', password: '' })

  const allStorage = () => {
    let values = [],
      keys = Object.keys(localStorage),
      i = keys.length

    while (i--) {
      let item = JSON.parse(localStorage.getItem(keys[i]))
      values.push(item)
    }

    return values
  }

  const logIn = () => {
    const allUsers = allStorage()

    const isMatch = allUsers.find(
      (element) => element.username === user.username
    )

    if (isMatch) {
      const succesfull = isMatch.password === user.password
      if (succesfull) {
        sessionStorage.setItem('currentUser', JSON.stringify(isMatch))
        console.log('logged in')
      } else {
        console.log('wrong password')
      }
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

      <button onClick={logIn}>Log In</button>
    </>
  )
}

export default Login
