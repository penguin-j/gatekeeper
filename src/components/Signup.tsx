import React, { useState } from 'react'
import { Amplify, Auth } from 'aws-amplify'
import awsExports from '../aws-exports'

const Signup = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const signUp = async () => {
    Amplify.configure({
      Auth: {
        region: awsExports.REGION,
        userPoolId: awsExports.USER_POOL_ID,
        userPoolWebClientId: awsExports.USER_POOL_APP_CLIENT_ID,
      },
    })

    try {
      await Auth.signUp({
        username,
        password,
        attributes: {
          email,
        },
      })
      console.log('サインアップ成功')
    } catch (error) {
      setError('サインアップエラー: ' + error.message)
    }
  }

  return (
    <div>
      <h1>新規アカウント作成</h1>
      <form>
        <label>
          ユーザー名:
          <input
            type='text'
            id='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          パスワード:
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <label>
          メールアドレス:
          <input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <button type='button' onClick={signUp}>
          サインアップ
        </button>
      </form>
      {error && <p>{error}</p>}
    </div>
  )
}

export default Signup
