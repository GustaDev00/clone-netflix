import { useState } from "react"
import { PlayArrow, Add, ThumbUpAlt, ThumbDown, KeyboardArrowDown}  from '@material-ui/icons';

const CardFilme = (props) => {
    const [ative, setAtive] = useState(false)
    function AtiveInfo(x){
        setAtive(x)
    }

    return (
        <div 
            className={ative ? "hover-active" : ""}
            onMouseOver={() => { setTimeout(AtiveInfo, 1000, true) }}
            onMouseOut={() => { setAtive(false) }}
            onMouseLeave={() => { setTimeout(AtiveInfo, 1000, false) }}
        >
            <button>
                <img src={'https://image.tmdb.org/t/p/original' + props.about.backdrop_path} alt="Imagem" />
            </button>
            {ative && (
                <div className="more-info">
                    <div className="btns-filme">
                        <div className="btns-control-filme">
                            <PlayArrow />
                            <Add />
                            <ThumbUpAlt />
                            <ThumbDown />
                        </div>
                        <div>
                            <KeyboardArrowDown />
                        </div>
                    </div>
                    <div className="info-genero">

                    </div>
                </div>
            )}
        </div>
    )
}

export default CardFilme