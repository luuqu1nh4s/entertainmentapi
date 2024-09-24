import './index.scss';

function CardOMDb(props){
    return(
        <div className='comp-card-omdb'>
            <img src={props.item.Poster}/>
            
            <div className='cartao'>
                <div className='infos'>
                    <h1>{props.item.Title}</h1>
                    <h2>Lançamento em {props.item.Year}</h2>
                </div>
                <h3>cód. imdb: {props.item.imdbID}</h3>
            </div>
        </div>
    )
}

export default CardOMDb