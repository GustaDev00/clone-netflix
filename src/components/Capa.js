// import CapaFilme from 'https://image.tmdb.org/t/p/original/1HiLMi66dO8Ia7EsPT2D9FwK5tL.jpg'
import {PlayArrow, InfoOutlined} from '@material-ui/icons';


const Capa = () => {

    return (
        <div className="front-cover">
            <div className="name-filme">
                <article>
                    <h2 className="title-filme">The Walking Dead</h2>
                    <p>
                    Uma turma de amigos vive ao sabor das maravilhas e horrores 
                    da puberdade nesta comédia dos amigos Nick Kroll e Andrew 
                    Goldberg.
                    </p>
                </article>
                <div className="btns-control">
                    <button className="play"><PlayArrow /> Assistir</button>
                    <button className="more-information"><InfoOutlined /> Mais informações</button>
                </div>
            </div>
            <div id="img-filme">
                <img src="https://image.tmdb.org/t/p/original/1HiLMi66dO8Ia7EsPT2D9FwK5tL.jpg" alt="Capa filme" />
            </div>
        </div>
    )
}

export default Capa