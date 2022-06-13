import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';
import './Profile.css'


function Profile() {

  const [data, setData] = useState({clicked: false})
  const [click, setClick] = useState({clicked: false})
  const [user, setUser] = useState([])
  const [userDetail , setUserDetail] = useState([])
  const navigate = useNavigate();

  const idUser = JSON.parse(localStorage.getItem('id'));

  const handleClick = () => {
    setData({clicked: !data.clicked})
  }
  const handleClick2 = () => {
    setClick({clicked: !click.clicked})
  }
  const navigateBack = () => {
    navigate(`/dashboard`)
  }


  const url = 'https://jsonplaceholder.typicode.com/users/'    
  const userID = JSON.parse(localStorage.getItem('id'));
  const url2 = `${url}/${userID}`
  useEffect(() => {
    const named = JSON.parse(localStorage.getItem('username'));
    if(named) {
      setUser(named)
    }
    axios.get(url2).then(response => {
      setUserDetail(response.data)
    })
  }, [url2])

  return(
    <div>
      <nav className='NavbarItems'>
        <h1 className='navbar-logo' onClick={navigateBack}><i className='fas fa-arrow-left'></i></h1>
        <h1 className='navbar-logo'><i className='fab fa-react'></i>Cinta Coding</h1>
        <div className='menu-icon' onClick={handleClick}>
          <i className={data.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={click.clicked ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <label className={click.clicked ? 'nav-links-active' : 'nav-links'} onClick={handleClick2}>
              Welcome, {user}
            </label>
            {(click.clicked) ? (<Dropdown userId={idUser} />) : ""}
          </li>
        </ul>
      </nav>
      <h1 className='text-center'>Profile</h1>
      <div className='profile-center'>
        <h2>Username      : {(userDetail.name === undefined) ? "" : userDetail.name}</h2>
        <h2>Email         : {(userDetail.name === undefined) ? "" : userDetail.email}</h2>
        <h2>Address       : {(userDetail.name === undefined) ? "" : userDetail.address.city}</h2>
        <h2>Phone Number  : {(userDetail.name === undefined) ? "" : userDetail.phone}</h2>
      </div>
    </div>
  )
}

export default Profile