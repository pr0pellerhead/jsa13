import {useState} from 'react';

const App = () =>  {
  const loginDataInit = {
    email: 'pero@pero.com',
    password: 'pero123pwd',
  };
  const [loginData, setLoginData] = useState(loginDataInit);

  const loginFieldUpdate = (e) => {
    setLoginData({...loginData, [e.target.name]: e.target.value});
  };

  const loginBtn = async () => {
    try {
      let res = await fetch(
        'http://localhost:10000/api/v1/auth/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(loginData)
        }
      );
      let token = await res.text();
      console.log(token);
      localStorage.setItem('jwt', token);
    } catch(err) {
      console.log(err);
    }
  };

  const getSecretData = async () => {
    try {
      let res = await fetch(
        'http://localhost:10000/api/v1/users',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`
          }
        }
      );
      let data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <input type="text" name="email" placeholder="email" value={loginData.email} onChange={loginFieldUpdate}/>
      <br/>
      <input type="password" name="password" placeholder="password" value={loginData.password} onChange={loginFieldUpdate}/>
      <br/>
      <button onClick={loginBtn}>Log in</button>
      <hr/>
      <button onClick={getSecretData}>Get some data (with token)</button>
    </div>
  );
}

export default App;
