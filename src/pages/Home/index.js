import { useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import api from '../../services/api';
import './home.css'



function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(()=> {
    
    async function loadFilmes(){
       const respose = await api.get('r-api/?api=filmes')
        setFilmes(respose.data);
    }

    loadFilmes();

  },[]); 

  return (
    <div className="container">
        <div className="lista-filmes">
          {filmes.map((item) => {
            return(
              <article key={item.id} className="filme">
                <strong> {item.nome} </strong>
                <img src={item.foto}/>
                <Link to={`/filme/${item.id}`}>Acessar</Link>
              </article>
            );
          })}
        </div>
      </div>
  );
}

export default Home;
