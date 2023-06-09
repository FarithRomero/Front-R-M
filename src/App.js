import { useState, useEffect } from 'react';
import style from './App.module.css'
import axios from 'axios';
import Nav from './components/Nav/Nav';
import About from "./views/About/About";
import Detail from "./views/Detail/Detail";
import { Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import Cards from "../src/components/Cards/Cards";
import LoginForm from './components/Form/LoginForm';
import Favorites from "./../src/components/Favorites/Favorites"
import ErrorPage from "./views/ErrorPage/ErrorPage";
import logo from './assets/tt-removebg-preview.png';


function App() {
   const [characters, Setcharacters] = useState([]); //aquí creo el estado(characters) la función que lo modifica (setCharacter) y le doy un valor al estado (useState([])) 
   const [acces, setAcces] = useState(false);
   const location = useLocation();

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = 'farithromero@gmail.com';
   const PASSWORD = '1234567';

function login(userData) {
   if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
   }
};

useEffect(() => {
   !access && navigate('/');
}, [access]);

   function addCharacter(id){
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            Setcharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });};  
   function closeHandler(id){
      let deleted = characters.filter((characters)=> characters.id !== Number(id));
      Setcharacters(deleted);
   };
      
   return (
      <div className='App'>
         <img src={logo} className={style.logo}/>
         {location.pathname !== "/" && <Nav onSearch={addCharacter}/>}

         <Routes>
            <Route path='/' element={<LoginForm login={login}/>}/>
            <Route path='/Home' element={<Cards className='Cards' characters={characters} onClose={closeHandler}/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Detail/:id' element={<Detail/>}/>
            <Route path='/Favorites' element={<Favorites/>}/>
            <Route path="*" element={<ErrorPage/>}/>
         </Routes>
      </div>
   );
};
export default App;

