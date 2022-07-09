import styles from "./footer.module.css"
import { ReactComponent as Logo } from "assets/logo.svg"
import classNames from "classnames"

const Footer = () => {
    return(
        <footer className={classNames({
            [styles.footer]: true,
            "p-3 d-flex justify-content-end": true,
        })}>
            <Logo />
        </footer>
    )
}

export default Footer