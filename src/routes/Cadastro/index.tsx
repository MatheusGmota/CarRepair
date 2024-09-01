import Button from "../../Components/Button/Button"
import estilo from "./Cadastro.module.css"


export default function Cadastro() {
  return (
    <main>
      <div className={estilo.paper} style={{ display: "flex", flexDirection: "column" }}>
        <h1>Cadastre-se</h1>
        <div className={estilo.inputs}>
          <h2 className={estilo.inputsL}>
            Nome
            <input type="text" name="nome" placeholder="Digite seu nome" />
          </h2>
          <h2 className={estilo.inputsR}>
            Sobrenome
            <input type="text" name="sobrenome" placeholder="Digite seu sobrenome" />
          </h2>
          <h2 className={estilo.inputsL}>
            Cpf
            <input type="text" name="cpf" placeholder="xxx.xxx.xxx-xx" />
          </h2>
          <h2 className={estilo.inputsR}>
            Telefone
            <input type="text" name="telefone" placeholder="(xx) x xxxx - xxxx" />
          </h2>
          <h2 className={estilo.inputsL}>
            E-mail
            <input type="text" name="email" placeholder="Digite seu e-mail" />
          </h2>
          <h2 className={estilo.inputsR}>
            Senha
            <input type="text" name="senha" placeholder="Digite sua senha" />
          </h2>
        </div>
        <div className={estilo.btnEnviar}>
          <Button href="/" text="Enviar" type="primary" filled={true} />
        </div>
      </div>
      <h4>
        Já possui login?
        <Button href="/entrar" text="Login" type="primary"/>
      </h4>
    </main>
  )
}