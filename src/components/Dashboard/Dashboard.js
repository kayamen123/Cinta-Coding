import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import './Dashboard.css'


function Dashboard() {

  const [data, setData] = useState({clicked: false})
  const [click, setClick] = useState({clicked: false})
  const [user, setUser] = useState([])
  const [post , setPost] = useState([])
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [maxPageNumberLimit] = useState(2);
  const [minPageNumberLimit] = useState(0);

  const handlePost = (event) => {
    setcurrentPage(Number(event.target.id))
  }

  const pages = [];

  const indexOfLastItem = currentPage*itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = post.slice(indexOfFirstItem, indexOfLastItem);
  const idUser = JSON.parse(localStorage.getItem('id'));
  for(let i=1; i <= Math.ceil(post.length/itemsPerPage); i++) {
    pages.push(i)
  }

  const renderPageNumbers = pages.map((number) => {
    if(number < maxPageNumberLimit+1 && number > minPageNumberLimit) {
      return (
        <li key={number} id={number} onClick={handlePost} className={currentPage === number ? "active" : null}>
          {number}
        </li>
      )
    } else {
      return null;
    }
  })

  const handleClick = () => {
    setData({clicked: !data.clicked})
  }
  const handleClick2 = () => {
    setClick({clicked: !click.clicked})
  }
  const handleNextPost = () => {
    setcurrentPage(currentPage+1)
    if(currentPage+1 > maxPageNumberLimit) {
      setcurrentPage(1)
    }
  }
  const url = 'https://jsonplaceholder.typicode.com/posts'
  const handlePrevPost = () => {
    setcurrentPage(currentPage-1)
    if(currentPage-1 <= minPageNumberLimit) {
      setcurrentPage(maxPageNumberLimit)
    }
  }
  

  useEffect(() => {
    const named = JSON.parse(localStorage.getItem('username'));
    if(named) {
      setUser(named)
    }
    axios.get(url).then(response => {
      setPost(response.data)
    })
  }, [url])

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
          {(click.clicked) ? (<Dropdown userId={idUser} />) : ""}
        </li>
      </ul>
    </nav>
    <h1 className='text-center'>Post</h1>
    <div className='post-center'>
        <ul>
          {currentItems.map((todo, index) => {
            return (
              <div key={index}>
                <li>
                  <b>{user}</b> {todo.title}
                </li>
                  <button><i className='fas fa-comment'></i> 5</button>
                  <button>Detail</button>
              </div>

          )
          })}
        </ul>
    </div>
    <ul className='pageNumbers'>
      <li>
        <button onClick={handlePrevPost}>Prev</button>
      </li>
        {renderPageNumbers}
      <li>
        <button onClick={handleNextPost}>Next</button>
      </li>
    </ul>
  </div> 
  )
}

export default Dashboard