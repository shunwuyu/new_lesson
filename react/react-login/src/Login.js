import { useState, useEffect } from 'react';
import { useHistory} from 'react-router-dom';
const Login = () => {
  const history = useHistory();
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  useEffect(() => {
    setTimeout(() => {
      let localStorage = window.localStorage
      if (localStorage.islogin === '1') {
        history.replace('/home')
      }
      // history.replace('/home')
      // window.localStorage.islogin = '1'
    }, 2000)
  }, [])
  const handleLogin = () => {
    if (username && password) {
      history.replace('/home')
      window.localStorage.islogin = '1'
      console.log('登陆成功');
    } else {
      console.log('请输入用户名和密码');
    }
  }
  return (
    <div className="login">
        <h2>欢迎来到XXX博客区</h2>
        <form className="form">
          <div className="formItem">
            <label htmlFor="username">用户名：</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => {
                setUserName(e.target.value)
              }}
            />
          </div>
          <div className="formItem">
            <label htmlFor="password">密码：</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value)}}
            />
          </div>
          <div
            className="loginBtn"
            onClick={() => {
              handleLogin()
            }}
          >
            登录
          </div>
        </form>
      </div>
  )
}

export default Login