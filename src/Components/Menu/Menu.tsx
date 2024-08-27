import { Link } from "react-router-dom";
import styles from "../../styles.module.css"
import Button from "../Button/Button";
import logoImage from "/carrepair.svg"

export default function Menu() {
    return (
      <nav className={styles.nav}>
        <Link to="/"><img className={styles.logo} src={logoImage} alt="Logo Carrepair" /></Link>
        <ul>
            <li><Link to="/pagina-participantes">Página dos Participantes</Link></li>
            <li><Link to="/orcamento">Orçamento</Link></li>
            <li><Link to="/">Sobre Nós</Link></li>
        </ul>
        <div>
          <Button href="/cadastro" text="Cadastre-se" type="primary"></Button>
          <Button href="/entrar" text="Entrar" type="primary" filled={true}></Button>
        </div>
      </nav>
    )
  }
  

  