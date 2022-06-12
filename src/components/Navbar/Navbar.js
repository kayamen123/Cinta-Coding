<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import Dashboard from '../Dashboard/Dashboard';
=======
import React, { Component } from 'react';
// import { Button } from '../shared/Button';
>>>>>>> 0dda9507efd968c89493266038c7b9ebebccf5d7
import {MenuItems} from "./MenuItems"
import './Navbar.css'

function Navbar() {
  const [click , setClicked] = useState({clicked: false})
  const [validate , setValidate] = useState(false)
  function handleClick() {
    setClicked({clicked: !click.clicked})
  }

    useEffect(() => {
      const validated = JSON.parse(localStorage.getItem('validate'));
      if(validated === true) {
        setValidate(true);
      }
    }, [])
    return (
      <div>
      {(validate === false) ? (
        <div>
        <nav className='NavbarItems'>
          <h1 className='navbar-logo'><i className='fab fa-react'></i>Cinta Coding</h1>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <ul className={click.clicked ? 'nav-menu active' : 'nav-menu'}>
            
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a className={item.cName} href={item.url}>
                    {item.title}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav> 
        <div className='full-background'>

        </div>
<<<<<<< HEAD
      </div> 
      ) : (
        <Dashboard />
      )}
      </div>
=======
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
>>>>>>> 0dda9507efd968c89493266038c7b9ebebccf5d7
    )
  }




export default Navbar