import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Dashboard from '../Dashboard/Dashboard';
import './Login.css'


function Login() {
  const [user , setUser] = useState({name: "" , password: ""})
  const [data , setData] = useState(null)
  const [error , setError] = useState(false)
  const [validate , setValidate] = useState(false)
  const navigate = useNavigate();

  const url = 'https://jsonplaceholder.typicode.com/users'

  useEffect(() => {
    const validated = JSON.parse(localStorage.getItem('validate'));
    axios.get(url).then(response => {
      setData(response.data)
      console.log(validated)
      if(validated === true) {
        setValidate(true);
      }
    })
  }, [url])

  function onLogin() {
    console.log(data);
    for(let i = 0; i < data.length; i++) {
      if(data[i].username === user.name) {
        if(data[i].username === user.password){
          localStorage.setItem('validate', JSON.stringify(true));
          localStorage.setItem('username', JSON.stringify(user.name));
          localStorage.setItem('id', JSON.stringify(data[i].id));
          navigate(`/dashboard`);
        }
      }
    }
    setError(true)
  }

  function submitHandler(e) {
    e.preventDefault()
    onLogin(user);
  }

  function valueSetName(value) {
    setUser({...user, name: value})
    if(error !== false) {
      setError(false)
    }
  }

  function valueSetPassword(value) {
    setUser({...user, password: value})
    if(error !== false) {
      setError(false)
    }
  }

  return (
    <div className='App-login'>
    {(validate === false) ? (
      <form onSubmit={submitHandler}>
      <div className='form-inner'>
        <h2>Login</h2>
        {(error !== false) ? (<div className='error'>Your Username or Your Password is wrong. Please Try Again</div>) : ""}
        <div className='form-group'>
            <label htmlFor='name'>Name: </label>
            <input type="text" name="name" id="name" onChange={e => valueSetName(e.target.value)} value={user.name}/>
        </div>

        
        <div className='form-group'>
            <label htmlFor='password'>Password: </label>
            <input type="password" name="password" id="password" onChange={e => valueSetPassword(e.target.value)} value={user.password}/>
        </div>
        <input type="submit" value="Login" />
      </div>
    </form>
    ) : (
      <Dashboard />
    )}
    </div>
  ) 
}
export default Login