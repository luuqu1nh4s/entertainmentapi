import './index.scss';
import { useState } from "react";
import axios from "axios";
import CardOMDb from "../../components/cards";

export default function BuscaFilmes() {
    const[filme, setFilme] = useState('');
    const[listaFilmes, setListaFilmes] = useState([]);

    async function procurarFilmes(){
        let url = `http://www.omdbapi.com/?apikey=d43a5114&s=${filme}&type=movie`;
        let resp = await axios.get(url);
        let dados = resp.data

        if (dados.Response === 'False'){
            alert("Nenhum filme foi encontrado.");
            return;
        }
        
        let filmesEncontrados = dados.Search;
        setListaFilmes(filmesEncontrados)
    }

    return (
      <div className="pagina-busca-filmes">
        <div className='secao'>
  
          <div className='entradas'>
              <h3>Digite o nome do filme:</h3>
              <input type='text' placeholder='Nome do filme' value={filme} onChange={e => setFilme(e.target.value)}/>
              <button onClick={procurarFilmes}>Buscar</button>
          </div>
  
          <div className="lista-filmes">
              {listaFilmes.map(item =>   
                <CardOMDb item={item}/>
              )}
          </div>
                  
        </div>      
      </div>
    );
}