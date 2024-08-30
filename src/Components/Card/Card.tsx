import { CardInterface } from "../../types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import styles from "./Card.module.css"

export const Card = ({image, icon, title, bodyText, description, type, hrefSocialMedia}:CardInterface) => {

    const [hrefGit, hrefInsta, hrefLkdin] = hrefSocialMedia ? hrefSocialMedia : "";

    const [rm, turma] = bodyText? bodyText : ""

    return (
        <>
            {type == 'primary' && 
                <div className={`${styles.card} ${styles[type]}`}>
                    <div className={styles.theFront}>
                        <div className={styles.iconCard}>{icon}</div>
                        <h3 className={styles.title}>{title}</h3>
                    </div>
                    <div className={styles.theBack}>
                        <small>{description}</small>
                    </div>
                </div>
            }

            {type == 'secondary' && 
                <div className={`${styles.card} ${styles[type]}`}>
                    <img src={image} alt="Imagem Random"  className={styles.image}/>
                    <div className={styles.body}>
                        <h3 className={styles.title}>{title}</h3>
                        <small>{rm}</small>
                        <small>{turma}</small>
                    </div>
                    <div className={styles.iconSocial}>
                        <a href={hrefGit}><FontAwesomeIcon icon={faGithub}/></a>
                        <a href={hrefInsta}><FontAwesomeIcon icon={faInstagram}/></a>
                        <a href={hrefLkdin}><FontAwesomeIcon icon={faLinkedin}/></a>
                    </div>
                </div>
            }
        </>
    )
}