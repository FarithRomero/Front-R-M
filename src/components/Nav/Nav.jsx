import SearchBar from '../SearchBar/SearchBar';
import style from './Nav.module.css';
import { Link } from 'react-router-dom';

export default function Nav(props) {   
    return(<div className={style.container} >   
         <div>
            <Link to="/Home">
                <button>Home</button>
            </Link>
            <Link to="/About">
                <button>About</button>
            </Link>
            <Link to="/Favorites">
                <button>Favorites</button>
            </Link>

         </div>
        <SearchBar onSearch={props.onSearch}/>   
        </div>
)};
