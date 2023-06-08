import { ADD_FAV } from "./action-type";
import { REMOVE_FAV } from "./action-type";

export const addFav = (character)=>{
    return {
        type: ADD_FAV,
        payload: character
    }
};

export const removeFav = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id,
    }
};

