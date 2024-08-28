import { CardInterface } from "../../types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import styles from "./Card.module.css"

export const Card = ({image,icon,title,subtitle,type,hrefSocialMedia}:CardInterface) => {
    const [hrefGit, hrefInsta, hrefLkdin] = hrefSocialMedia ? hrefSocialMedia : "";
    const [a,b] = subtitle? subtitle : ""
    return (
        <>
            <article className={`${styles.card} ${styles[type]}`}>
                {image &&
                    <img src={image} alt="Imagem Random"  className={styles.image}/>}
                {icon &&
                    <div className={styles.iconCard}>{icon}</div>}
                <div className={styles.body}>
                    <h3 className={styles.title}>{title}</h3>
                    <p>{a}</p>
                    <p>{b}</p>
                </div>
                {hrefGit && hrefInsta && hrefLkdin &&
                <div className={styles.socialMedias}>
                    <a href={hrefGit}><FontAwesomeIcon icon={faGithub}/></a>
                    <a href={hrefInsta}><FontAwesomeIcon icon={faInstagram}/></a>
                    <a href={hrefLkdin}><FontAwesomeIcon icon={faLinkedin}/></a>
                </div>}
            </article>
        </>
    )
}