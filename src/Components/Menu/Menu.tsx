import { Link } from "react-router-dom";
import styles from "../../styles.module.css"

export default function Menu() {
    return (
      <nav className={styles.nav}>
        <Link to="/"><img className={styles.logo} src="carrepair.svg" alt="Logo Carrepair" /></Link>
        <ul>
            <li><Link to="/pagina-participantes">Página dos Participantes</Link></li>
            <li><Link to="/orcamento">Orçamento</Link></li>
            <li><Link to="/">Sobre Nós</Link></li>
        </ul>
        <div>
          <Link className={styles.btnCadastro} to="/cadastro">Cadastre-se</Link>
          <button className={styles.button}><Link to="/entrar">Entrar</Link></button>
        </div>
      </nav>
    )
  }
  

  