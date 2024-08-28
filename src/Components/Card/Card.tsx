import { CardInterface } from "../../types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import styles from "./Card.module.css"

export const Card = ({image,icon,title,subtitle,hrefSocialMedia}:CardInterface) => {
    const [hrefGit, hrefInsta, hrefLkdin] = hrefSocialMedia ? hrefSocialMedia : ""
    console.log(hrefGit, hrefInsta, hrefLkdin, image,icon,title,subtitle)
    return (
        <div>
            <article className={styles.card}>
                {image &&
                    <img src={image} alt="Imagem Random"  className={styles.image}/>}
                {icon &&
                    <div className={styles.iconCard}>{icon}</div>}
                <div>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.subtitle}>{subtitle}</p>
                </div>
                <div className={styles.socialMedias}>
                    {hrefGit && 
                        <a href={hrefGit}><FontAwesomeIcon icon={faGithub}/></a>
                    }
                    {hrefInsta && 
                        <a href={hrefInsta}><FontAwesomeIcon icon={faInstagram}/></a>
                    }
                    {hrefLkdin && 
                        <a href={hrefLkdin}><FontAwesomeIcon icon={faLinkedin}/></a>
                    }
                </div>
            </article>
        </div>
    )
}