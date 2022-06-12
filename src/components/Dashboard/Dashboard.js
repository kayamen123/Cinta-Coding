import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';
import './Dashboard.css'


function Dashboard() {

  const [data, setData] = useState({clicked: false})
  const [click, setClick] = useState({clicked: false})
  const [user, setUser] = useState([])
  const [post , setPost] = useState(null)

  const handleClick = () => {
    setData({clicked: !data.clicked})
  }
  const handleClick2 = () => {
    setClick({clicked: !click.clicked})
  }
  const url = 'https://jsonplaceholder.typicode.com/posts'
  const  userName  = useParams();

  useEffect(() => {
    const named = JSON.parse(localStorage.getItem('username'));
    if(named) {
      setUser(named)
    }
    axios.get(url).then(response => {
      setPost(response.data)
    })
  }, [])
  return (
    <div>
    <nav className='NavbarItems'>
      <h1 className='navbar-logo'><i className='fab fa-react'></i>Cinta Coding</h1>
      <div className='menu-icon' onClick={handleClick}>
        <i className={data.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul className={click.clicked ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <label className={click.clicked ? 'nav-links-active' : 'nav-links'} onClick={handleClick2}>
            Welcome, {user}
          </label>
          {(click.clicked) ? (<Dropdown User={userName}/>) : ""}
        </li>
      </ul>
    </nav> 
  </div> 
  )
}

export default Dashboard