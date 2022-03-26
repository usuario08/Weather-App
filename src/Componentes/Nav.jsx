import logo from "../img/LOGO.png";
import Search from "./Search";
import "./Nav.css";
import { Link } from "react-router-dom";
export default function nav({onSearch}) {
  return (
    <header>
      <div class="header">
        <nav>
          <Link to='/'>
            <img class="logo" src={logo} alt="logo" />
          </Link>
          <ul>
            <Link to='/'>
            <li>Home</li>
            </Link>
            <Link to='/cards'>
            <li>Cartas</li>
            </Link>
            <Link to='/about'>
            <li>Sobre Nosotros</li>
            </Link>
          </ul>
        </nav>
        <Search onSearch={onSearch}/>
      </div>
    </header>
  );
}
