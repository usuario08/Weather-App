import "./Bienvenida.css";
export default function Bienvenida() {
  let hora = new Date().toLocaleString().split(" ")[1].split(":")[0];
  let saludo = "";
  hora > 0 && hora < 5
    ? (saludo = "Buenas noches 🌙")
    : hora > 4 && hora < 12
    ? (saludo = "Buenos dias")
    : hora > 11 && hora < 18
    ? (saludo = "Buenas tardes")
    : (saludo = "Buenas noches");

  return (
    <div class="content">
      <h1 class="titulo">Hola & Bienvenid@</h1>
      <p class="parrafo">
        {saludo} gente, les presento esta pequeña SPA (Single Page Applications) que consiste en ver
        el clima actual de las diferentes ciudades del mundo. Para saber el
        clima de alguna Ciudad escriba en el buscador y presione Search. Echa un
        vistazo y comparteme tu opinión. Gracias 🙂.
      </p>
    </div>
  );
}
