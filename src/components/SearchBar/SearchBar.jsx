import {SearchContainer, SearchInput, SearchIcon, SearchIconContainer} from "./SearchBar.styles";
import { useState } from "react"; //creo un nuevo estado


export default function SearchBar(props) {
   const {onSearch} = props;

   const [id, setId] = useState(''); //creo a id como estado con un value: ""

 function handleChange (event){
   event.preventDefault();
      let input = event.target.value;

      setId(input);
   
   };

      return (
      <SearchContainer>
         <SearchInput  type='search' value={id} onChange={handleChange}/>
         <SearchIconContainer>
            <SearchIcon onClick={() => onSearch(id)}></SearchIcon>
         </SearchIconContainer>
      </SearchContainer> 
   );
};


