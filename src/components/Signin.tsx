import React, { useState } from 'react'
import { Amplify, Auth } from 'aws-amplify'
import awsExports from '../aws-exports'

const Signin: React.FC = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')

  const signIn = async () => {
    // Configure Amplify in index file or root file
    Amplify.configure({
      Auth: {
        region: awsExports.REGION,
        userPoolId: awsExports.USER_POOL_ID,
        userPoolWebClientId: awsExports.USER_POOL_APP_CLIENT_ID,
      },
    })

    try {
      await Auth.signIn(username, password)
      console.log('ログイン成功')
    } catch (error) {
      setError('ログインエラー: ' + error.message)
    }
  }

  return (
    <div>
      <h1>Sign in</h1>
      <form>
        <label>
          User name:
          <input
            type='text'
            id='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type='button' onClick={signIn}>
          Sign in
        </button>
      </form>
      {error && <p>{error}</p>}
    </div>
  )
}

export default Signin
