import estilo from "./Cadastro.module.css"

export default function Cadastro() {
  return (
    <main>
      <div className={estilo.paper} style={{ display: "flex", flexDirection: "column" }}>
        <h1>Cadastre-se</h1>
        <div className={estilo.inputs}>
          <h2>
            Nome
            <input type="text" name="nome" placeholder="Digite seu nome" />
          </h2>
          <h2>
            Sobrenome
            <input type="text" name="sobrenome" placeholder="Digite seu sobrenome" />
          </h2>
          <h2>
            Cpf
            <input type="text" name="cpf" placeholder="xxx.xxx.xxx-xx" />
          </h2>
          <h2>
            Telefone
            <input type="text" name="telefone" placeholder="(xx) x xxxx - xxxx" />
          </h2>
          <h2>
            E-mail
            <input type="text" name="email" placeholder="Digite seu e-mail" />
          </h2>
          <h2>
            Senha
            <input type="text" name="senha" placeholder="Digite sua senha" />
          </h2>

        </div>
      </div>
    </main>
  )
}