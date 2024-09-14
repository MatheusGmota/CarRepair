import Button from "../../Components/Button/Button"
import estilo from "./Cadastro.module.css"


export default function Cadastro() {
  return (
    <main>
      <form className={estilo.formulario}>
        <h1>Cadastre-se</h1>
        <div className={estilo.forms1}>
          <div>
            <label>Nome</label>
            <input type="text" placeholder="Digite seu nome"/>
          </div>
          <div>
            <label>Sobrenome</label>
            <input type="text" placeholder="Digite seu nome"/>
          </div>
          <div>
            <label>Cpf</label>
            <input type="text" placeholder="xxx.xxx.xxx-xx"/>
          </div>
          <div>
            <label>Telefone</label>
            <input type="text" placeholder="(xx) x xxxx - xxxx"/>
          </div>
          <div>
            <label>E-mail</label>
            <input type="text" placeholder="Digite seu e-mail"/>
          </div>
          <div>
            <label>Senha</label>
            <input type="text" placeholder="Digite sua senha"/>
          </div>
          <div>
            <Button href="/" text="Enviar" type="primary" filled={true} />
          </div>
        </div>
      </form>
      <p>
        Já possui login?
        <Button href="/entrar" text="Login" type="primary"/>
      </p>
    </main>
  )
}