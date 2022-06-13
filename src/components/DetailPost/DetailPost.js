import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';
import './DetailPost.css'


function DetailPost () {
  const [data, setData] = useState({clicked: false})
  const [click, setClick] = useState({clicked: false})
  const [user, setUser] = useState([])
  const [post , setPost] = useState([])
  const [comments , setComments] = useState([])
  const [oneComments , setOneComments] = useState([])
  const navigate = useNavigate();

  const handleClick = () => {
    setData({clicked: !data.clicked})
  }
  const handleClick2 = () => {
    setClick({clicked: !click.clicked})
  }
  const navigateBack = () => {
    navigate(`/dashboard`)
  }

  const url = 'https://jsonplaceholder.typicode.com/posts'
  const idUser = JSON.parse(localStorage.getItem('id'));

  useEffect(() => {
    const named = JSON.parse(localStorage.getItem('username'));
    const postId = JSON.parse(localStorage.getItem('post'));
    if(named) {
      setUser(named)
    }
    const url2 = `${url}/${postId}`

    axios.get(url2).then(respond => {
      setPost(respond.data);
    })

    const url3 = `${url}/${postId}/comments`

    axios.get(url3).then(res => {
      setComments(res.data);
      setOneComments(res.data[0])
    })
  }, [url])

  return (
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
    <h1 className='text-center'>Post</h1>
    <div className='post-center-detail'>
      <h2>{(post.title === undefined) ? "" : post.title}</h2>
      <h2>{(oneComments.body === undefined) ? "" : oneComments.body}</h2>
      <h3><i className='fas fa-comment margin'></i>{(comments.length === undefined) ? "" : comments.length}</h3>
    </div>
  </div>
  )
}


export default DetailPost