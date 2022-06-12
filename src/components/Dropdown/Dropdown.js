import React from "react";
import { MenuDrops } from "./MenuDrops";
import "./Dropdown.css"
import { useNavigate } from "react-router-dom";



function Dropdown({User}) {
  
  const navigate = useNavigate();
  function logout()  {
    localStorage.setItem('validate', JSON.stringify(false));
    localStorage.setItem('username', JSON.stringify(""));
    navigate(`/`)
  }

  function profile()  {
    console.log('profile')
  }
  return (
    <ul className="dropdown-menu">
      { MenuDrops.map((item) => {
        return (
        <li key={item.id}>
          {(item.id === 2) ? (
            <label className={item.cName} onClick={logout}>
              {item.title}
            </label>
          ) : (
            <label className={item.cName} onClick={profile}>
              {item.title}
            </label>
          )}
        </li>
        )
      })}
    </ul>
  )
}

export default Dropdown;