import { useState } from "react";
import estilo from "./login.module.css"
import { Link } from "react-router-dom";

export default function Login() {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const controleLogin = (event) => {
    event.preventDefault();

    if(userName && password){
      localStorage.setItem("userName", userName);
      localStorage.setItem("password", password);
    }else{
      alert("Por favor preencha todos os dados");
    }
  }

  return (
    <main>
      <section className={estilo.mainSection}>
        <h1>Entrar</h1>
        <form onSubmit={controleLogin} className={estilo.form}>
          <div>
            <label>E-mail</label>
            <input type="email" name="" id="" placeholder="Digite seu email" 
              onChange={(e)=> setUserName(e.target.value)}/>
          </div>
          <div>
            <label>Senha</label>
            <input type="password" placeholder="Digite sua senha" 
              onChange={(e)=> setPassword(e.target.value)}/>
          </div>
          <button>Entrar</button>
        </form>
      </section>
      <p>
        Não possui cadastro? <strong> <Link to="/cadastro">Cadastre-se</Link> </strong>
      </p>
    </main>
  );
}