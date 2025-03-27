import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Login( { onLogin }) {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  function handleLogin() {
    if(userData.username === 'admin' && userData.password ==='123') {
      onLogin && onLogin({username: userData.username});
      navigate('/') //home yvjiga
    } else {
      //amjiltgu bol
      navigate('./NoPage.js')
    }

  }
  return (
    <div style={{ padding: 10 }}>
      <br/>
      <span>Username:</span><br/>
      <input 
        type="text"
        onChange={(e) => setUserData({...userData, username: e.target.value})}/><br/>
      <span>Password:</span><br/>
      <input
        type="password"
        onChange={(e) => setUserData({...userData, password: e.target.value})}/><br/><br/>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}
export default Login;
