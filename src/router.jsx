import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './pages/app';
import BuscaFilmes from './pages/buscaFilmes';

export default function Navegacao(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>}/>
                <Route path='/buscaFilmes' element={<BuscaFilmes/>}/>
            </Routes>
        </BrowserRouter>
    )
}