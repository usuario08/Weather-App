import "./Layout.css";
import img from "../img/bkgFondo.jpg";
export default function Layout({ children }) {
  return (
    <div class="layout1">
      <img class='imgbkg' src={img} alt="" />
      {children}
    </div>
  );
}
