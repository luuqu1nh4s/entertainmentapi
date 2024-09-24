import './index.scss';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="pagina-home">
      <div className='secao'>
        <h1>API de Filmes</h1>
        <button><Link to = './buscaFilmes'>Vamos lá</Link></button>
      </div>      
    </div>
  );
}

export default App;

{/*<table>
    <thead>
       <tr>
          <th>ID</th>
          <th>Filme</th>
          <th>Ano</th>
       </tr>
    </thead>
    <tbody>
      {listaFilmes.map(item =>   
        <tr>
          <td>{item.imdbID}</td>
          <td>{item.Title}</td>
          <td>{item.Year}</td>
        </tr>
      )}
    </tbody>
  </table>*/}