import { useState } from "react";
import "./Search.css";
import { Link } from "react-router-dom";
export default function Search({onSearch}) {

  const [ciudad, setCiudad] = useState("");

  function handleClick(e){
    e.preventDefault()
    onSearch(ciudad)
  }

  return (
    <div class="search">
      <input
        type="text"
        onChange={e=>setCiudad(e.target.value)}
        onBlur={e=>(e.target.value="", e.target.focus())}
        placeholder="Ciudad..."
      />
      <button onClick={handleClick}>
        <Link class='link' to="/cards">Search</Link>
      </button>
    </div>
  );

}
