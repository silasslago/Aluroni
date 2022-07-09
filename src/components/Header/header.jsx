import { ReactComponent as Logo } from "assets/logo.svg"
import classNames from "classnames"
import { Link } from "react-router-dom"
import styles from "./header.module.css"

const Header = () => {

    const links = [
        {
            label: "Início",
            to: "/"
        },
        {
            label: "Cardápio",
            to: "/cardapio"
        },
        {
            label: "Sobre nós",
            to: "/aboutus"
        }
    ]

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <Logo />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">        
                            {
                                links.map((curLink, index) => (
                                    <li className={classNames({
                                        [styles["navbar-list"]]: true,
                                        "nav-link": true,
                                    })} key={index}>
                                        <Link to={curLink.to}>
                                            {curLink.label}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header