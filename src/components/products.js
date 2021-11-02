import Card from './card'
import { ArrowBackIos, ArrowForwardIos}  from '@material-ui/icons';

const Filmes = (props) => {

    return (
        <div className="row-filmes">
            <h2>{props.dados.title}</h2>
            <button><ArrowBackIos /></button>
            <div className="carousel-file">
                {props.dados.items.filter(about => about.backdrop_path != null).map(about =>
                    <div className="filmes-series">
                        <Card about={about} />
                    </div>
                )}
            </div>
            <button><ArrowForwardIos /></button>
        </div>
    )
}

export default Filmes