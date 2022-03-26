import "./About.css";
export default function About() {
  return (
    <div class="about">
      <div class="col1">
        <p class="p1">Hola, soy</p>
        <p class="p2">Antonio Mejía</p>
      </div>
      <div class="col2">
        <p>
          Desde siempre me ha gustado la tecnología. Estudié desarrollo de
          sistemas, y hoy estoy cursando la carrera de desarrollo web. Soy una
          persona muy motivada en busca de nuevos desafíos para mejorar mis
          habilidades profesionales. La informática es parte de mi vida.
        </p>
      </div>
      <div class='col3'>
        <p>Se usó los siguientes lenguajes, librerias y tecnologias:</p>
        <ul>
          <li class='js'>Java Script</li>
          <li class='html'>Html</li>
          <li class='css'>CSS</li>
          <li class='react'>React</li>
          <li class='reactrouter'>React Router</li>
        </ul>
        <p>Los datos provienen de una API de clima 👇:</p>
        <ul><li class='api'>http://openweathermap.org</li></ul>
      </div>
    </div>
  );
}
