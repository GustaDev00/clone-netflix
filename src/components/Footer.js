import { Instagram, Facebook, GitHub, LinkedIn } from '@material-ui/icons'

const Footer = () => {

    return (
        <footer>
            <div className="social-links">
                <a href="https://www.linkedin.com/in/gustavo-pontes-702194153/"><Instagram color="action" fontSize="large" /></a>
                <a href="https://www.linkedin.com/in/gustavo-pontes-702194153/"><Facebook color="action" fontSize="large" /></a>
                <a href="https://www.linkedin.com/in/gustavo-pontes-702194153/"><GitHub color="action" fontSize="large" /></a>
                <a href="https://www.linkedin.com/in/gustavo-pontes-702194153/"><LinkedIn color="action" fontSize="large" /></a>
            </div>
            <div className="info-me">
                <article>
                    <h2>Info</h2>
                    <p>Gustavo Pontes</p>
                    <p>Desenvolvedor Front End</p>
                    <p>React Js</p>
                </article>
                <article>
                    <h2>Contato</h2>
                    <p>gustavo.4dev@gmail.com</p>
                    <p>(11) 94248-7542</p>
                </article>
            </div>
            <div className="end">
                <p>@Gusta</p>
            </div>
        </footer>
    )
}

export default Footer