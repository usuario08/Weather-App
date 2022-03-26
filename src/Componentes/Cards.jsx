import './Cards.css'
import Card from './Card'
export default function Cards({ciudades,onClose}){
    return <div class='cards'>
        {
            ciudades && ciudades.map(c=><Card
            key={c.id}
                id={c.id}
                ciudad={c.name}
                min={c.min}
                max={c.max}
                img={c.img}
                onClose={()=>onClose(c.id)}
            />)
        }
    </div>
}