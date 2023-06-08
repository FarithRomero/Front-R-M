   import React from "react";
   import style from "./Card.module.css";
   // import { useNavigate } from "react-router-dom";
   import { Link } from "react-router-dom";
   import { connect } from "react-redux";
   import { addFav, removeFav } from "../../redux/action";
   import { useState, useEffect } from "react";

  function Card({ id, name, especies, gender, image, onClose, origin, addFav, removeFav, myFavorites }){

   const [isFav, setFav] = useState(false);

   const handleFavorite= () => {
      if(isFav){
         setFav(false);
         removeFav(id);
      } 
      else {
         setFav(true);
         addFav({id, name, especies, gender, image})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setFav(true);
         }
      });
   }, [myFavorites]);

      return (
         <div > 
            <div className = {style.styleCard}>
               {
                  isFav?(
                     <button onClick={handleFavorite}>❤️</button>
                  ) : (
                     <button onClick={handleFavorite}>🤍</button>
                  )
               }
               <button  onClick={()=> onClose(id)} >X</button> 
               <img src={image} alt="Imagen no se puede cargar"/> 
               <Link to={`/Detail/${id}`}>
                  <h1>{name}</h1>   
               </Link>
               <h2 >{origin} </h2>  
            </div>
         </div>
      );
   };

   const mapDispatchToProps = (dispatch) => {
      return {
         addFav: (character) => {dispatch(addFav(character))},
         removeFav: (id) => {dispatch(removeFav(id))},
      }
   };

   const mapStateToProps = (state) =>{
      return {
         myFavorites: state.myFavorites
      }
   };

   export default connect(mapStateToProps, mapDispatchToProps)(Card);
  
 
   