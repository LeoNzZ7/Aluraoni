import styles from "./footer.module.scss"
import { ReactComponent as Logo } from "assets/logo.svg"

export const Footer = () => {
    return (
        <footer className={styles.footer} >
            <Logo />
        </footer>
    );
};