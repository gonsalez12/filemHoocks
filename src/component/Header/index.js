import './header.css';
import {Link} from 'react-router-dom'


function Header() {
  return (
    <header>
      <Link className="logo" to="/">Filmaria</Link>
      <Link className="favoritos" to="/favoritos">Salvo</Link>       
    </header>
  );
}

export default Header;
