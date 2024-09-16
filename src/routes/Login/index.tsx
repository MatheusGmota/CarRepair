import { useState } from "react";
import estilo from "./Login.module.css"
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";

export default function Login() {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navegar = useNavigate()

  const controleLogin = (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    if(userName && password){
      localStorage.setItem("userName", userName);
      localStorage.setItem("password", password);
      navegar("/")
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
          <Button href="submit" text="Enviar" type="secondary" filled={true} />
        </form>
      </section>
      <p>
        Não possui cadastro? <strong> <Link to="/cadastro">Cadastre-se</Link> </strong>
      </p>
    </main>
  );
}