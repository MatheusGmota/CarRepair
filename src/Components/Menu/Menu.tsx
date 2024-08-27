import { Link } from "react-router-dom";

export default function Menu() {
    return (
      <nav>
        <Link to="/"><img src="carrepair.svg" alt="Logo Carrepair" /></Link>
        <ul>
            <li><Link to="/pagina-participantes">Página dos Participantes</Link></li>
            <li><Link to="/orcamento">Orçamento</Link></li>
            <li><Link to="/">Sobre Nós</Link></li>
        </ul>
        <div>
          <Link to="/cadastro">Cadastre-se</Link>
          <button><Link to="/entrar">Entrar</Link></button>
        </div>
      </nav>
    )
  }
  

  