import "./Card.css";
export default function Card({ciudad,min,max,img,onClose}) {
  return (
    <div class="card">
      <div class='btnGrid'>
        <button class="btnClose" onClick={onClose}>X</button>
      </div >
      <h4 class='ciudad'>{ciudad}</h4>
      <div class="datos">
        <div class="min">
          <label>Min</label>
          <p>{min}°</p>
        </div>
        <div class="max">
          <label>Max</label>
          <p>{max}°</p>
        </div>
        <div class='img1'>
        <img src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} alt="" />
        </div>
      </div>
    </div>
  );
}
