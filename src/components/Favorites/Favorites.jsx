import Card from "../Card/Card.jsx"
import { connect } from 'react-redux';
import { useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/action.js";
import { useState } from "react";


function Favorites({myFavorites}, onClose){
    const [aux, setAux] = useState(false);

    const dispatch = useDispatch();    

    const handleOrder = (event)=>{
        dispatch(orderCards(event.target.value));
        setAux(!aux);
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

   return (
    <div>
        <select onChange={handleOrder}>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
        </select>
        <select onChange={handleFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>       
            <option value="Genderless">Genderless</option>
            <option value="unknown">Unknown</option>
        </select>
        { myFavorites?.map((character)=>{
                return (
                    <Card
                        key = {character.id}
                        id = { character.id}
                        name = {character.name}  
                        image = {character.image}
                        origin={character.origin} 
                    />
                )
            
            })
        }

    </div>
   );
};

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
};
export default connect(mapStateToProps, null)(Favorites);

