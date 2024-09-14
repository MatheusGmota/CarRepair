import { ButtonInterface } from "../../types";
import styles from "./Button.module.css";
import { Link } from "react-router-dom";


function Button({text, filled, href, type}: ButtonInterface) {
    const filledClass = filled ? styles.filled : ""
    return (
        <>
            {href == 'submit' &&
                <button type='submit' className={`${styles.btn} ${filledClass} ${styles[type.toLowerCase()]}`}>{text}</button>
            }
            {href != 'submit' &&
                <Link className={`${styles.btn} ${filledClass} ${styles[type.toLowerCase()]}`} to={href}>{text}</Link>
            }
        </>
    )
}

export default Button