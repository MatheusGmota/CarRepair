import { Link } from "react-router-dom";
import styles from "../Header/Header.module.css";
import Button from "../Button/Button";
import logoImage from "/carrepair.svg";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Menu() {
  const [mobileWidth, setMobileWidth] = useState<number>(window.innerWidth);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => setMobileWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [])

  const toogleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.logo}><img src={logoImage} alt="Logo Carrepair" /></Link>
      {mobileWidth <= 730 ? (
        <>
          <section className={styles.menuHamburguer}>
            <div onClick={toogleMenu}>
              <FontAwesomeIcon icon={faBars} className={styles.icone} />
            </div>
            <ul className={isOpen ? styles.menuAberto : styles.menuFechado}>
              <li><Link to="/pagina-participantes">Página dos Participantes</Link></li>
              <li><Link to="/orcamento">Orçamento</Link></li>
              <li><Link to="/sobre-nos">Sobre Nós</Link></li>
              <li><Link to="/cadastro">Cadastre-se</Link></li>
              <li><Link to="/entrar">Entrar</Link></li>
            </ul>
          </section>
        </>
      ) : (
        <>
          <ul>
            <li><Link to="/pagina-participantes">Página dos Participantes</Link></li>
            <li><Link to="/orcamento">Orçamento</Link></li>
            <li><Link to="/sobre-nos">Sobre Nós</Link></li>
          </ul>
          <div>
            <Button href="/cadastro" text="Cadastre-se" type="primary"></Button>
            <Button href="/entrar" text="Entrar" type="primary" filled={true}></Button>
          </div>
        </>
      )}
    </nav>
  )
}


