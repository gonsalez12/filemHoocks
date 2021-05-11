import { useEffect, useState} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import api from '../../services/api';
import './filme-info.css';


function Filme() {
  const { id } = useParams();
  const [filme, setFilme] = useState([]);
  const[loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(()=> {
    
    async function loadFilmes(){
      const respose = await api.get(`r-api/?api=filmes/${id}`);
      
      if(respose.data.length === 0){
        history.replace("/");
        return
      }
      
      setFilme(respose.data);
      setLoading(false);
        
    }

    loadFilmes();

  },[history, id]); 


  function salvaFilme(){
    const minhaLista = localStorage.getItem('filmes');

    let filmesSalvos = JSON.parse(minhaLista) || [];

    const hasFilme = filmesSalvos.some( (filmesSalvos) => filmesSalvos.id === filme.id)

    if(hasFilme){
      alert("Voce ja possui esse filme salvo");
      return;
    }

    filmesSalvos.push(filme);
    localStorage.setItem('filmes', JSON.stringify(filmesSalvos));
    alert("Filme salvo com sucesso");

  }

  if(loading){
    return(
      <div className="filme-info">
        <h1>Carrenado info do seu filme</h1>
      </div>
    )
  }

  return (
    <div className="filme-info">
        <h1>{filme.nome}</h1>
        <img src={filme.foto} alt={filme.nome} />
          <h3>Sinopse</h3>
        {filme.sinopse}
        <div className="botoes">
          <button onClick={ salvaFilme }>Salvar</button>
          <button>
            <a target="blank" href={`https://www.youtube.com/results?search_query=${filme.nome} Trailer`}>
              Trailer
            </a>
          </button>
        </div>

    </div>
    
  );
}

export default Filme;
