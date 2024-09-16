import { Link } from "react-router-dom"
import Button from "../../Components/Button/Button"
import styles from "./Cadastro.module.css"

export default function Cadastro() {
  return (
    <main>
      <form className={styles.formulario}>
        <h1>Cadastre-se</h1>
        <div className={styles.forms1}>
          <div>
            <label>Nome</label>
            <input className={styles.input} type="text" placeholder="Digite seu nome"/>
          </div>
          <div>
            <label>Sobrenome</label>
            <input className={styles.input} type="text" placeholder="Digite seu nome"/>
          </div>
          <div>
            <label>Cpf</label>
            <input className={styles.input} type="text" placeholder="xxx.xxx.xxx-xx"/>
          </div>
          <div>
            <label>Telefone</label>
            <input className={styles.input} type="text" placeholder="(xx) x xxxx - xxxx"/>
          </div>
          <div>
            <label>E-mail</label>
            <input className={styles.input} type="text" placeholder="Digite seu e-mail"/>
          </div>
          <div>
            <label>Senha</label>
            <input className={styles.input} type="text" placeholder="Digite sua senha"/>
          </div>
          <div>
            <Button href="submit" text="Enviar" type="primary" filled={true} />
          </div>
        </div>
      </form>
      <p>
        Já possui login?
        <strong> <Link to="/entrar">Login</Link> </strong>
      </p>
    </main>
  )
}