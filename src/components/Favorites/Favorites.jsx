import Card from "../Card/Card.jsx"
import { connect } from 'react-redux' 

function Favorites({myFavorites}){



   return (
    <div>
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
}

export default connect(mapStateToProps, null)(Favorites);

