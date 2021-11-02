import LogoNetflix from "../assets/img/netflix.png"
import Perfil from "../assets/img/perfil.png"
import { Search, Notifications, ArrowDropDown } from '@material-ui/icons';
import { useEffect, useState } from "react";

const Header = () => {
    const [scroll, setScroll] = useState(false)
    const [onSearch, setOnSearch] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY > 50);
        })
    }, [scroll])

    return (
        <header className={scroll ? "scroll-down" : ""}>
            <nav>
                <a href="/"><img src={LogoNetflix} alt="Logo Netflix" /></a>
                <ul className="main-menu">
                    <li><a href="/">Início</a></li>
                    <li><a href="/">Séries</a></li>
                    <li><a href="/">Filmes</a></li>
                    <li><a href="/">Bombando</a></li>
                    <li><a href="/">Minha Lista</a></li>
                </ul>
                <ul className="second-menu">
                    <li className="search-btn">

                        {onSearch ?
                            (
                                <div className="search-bar">
                                    <Search />
                                    <input autoFocus type="text" onBlur={() => { setOnSearch(false); console.log("Clicado", onSearch) }} placeholder="Títulos, gente e gêneros" />
                                </div>
                            ) :
                            (
                                <button className="search-icon" onClick={() => { setOnSearch(true); console.log("Clicado", onSearch) }}>
                                    <Search />
                                </button>
                            )
                        }

                    </li>
                    <li className="btn-notification">
                        <button className="notification-icon">
                            <Notifications />
                        </button>
                    </li>
                    <li>
                        <div className="account-menu-item">
                            <div className="account-menu-img">
                                <img src={Perfil} alt="Imagem de Peril" />
                                <span>
                                    <ArrowDropDown />
                                </span>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header