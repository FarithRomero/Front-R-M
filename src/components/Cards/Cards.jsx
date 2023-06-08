import Card from '../Card/Card';
import Style from './Cards.module.css';
import Imagen from '../../assets/tt-removebg-preview.png';

export default function Cards(props) {
   return <div> 
        <img src={Imagen} alt='Imagen no se cargó'/>  
      <div className={Style.list}>    
         {props.characters.map((personaje) => 
            <Card 
               id={personaje.id}
               name={personaje.name}
               status={personaje.status}
               species={personaje.species} 
               gender= {personaje.gender}
               origin={personaje.origin.name} 
               image={personaje.image}
               onClose={props.onClose}
            />
         )}
      </div>
   </div>;
}
