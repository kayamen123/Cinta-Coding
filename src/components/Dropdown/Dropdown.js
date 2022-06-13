import React from "react";
import { MenuDrops } from "./MenuDrops";
import "./Dropdown.css"
import { useNavigate } from "react-router-dom";



function Dropdown({userId}) {
  const navigate = useNavigate();
  function logout()  {
    localStorage.setItem('validate', JSON.stringify(false));
    localStorage.setItem('username', JSON.stringify(""));
  }

  function profile()  {
    navigate(`/profile`);
  }
  return (
    <ul className="dropdown-menu">
      { MenuDrops.map((item) => {
        return (
        <li key={item.id}>
          {(item.id === 2) ? (
            <a className={item.cName} onClick={logout} href="/">
              {item.title}
            </a>
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