import estilo from "./Confirmacao.module.css"
import botao from "../../Components/Button/Button.module.css"
import { useNavigate, useParams } from "react-router-dom";


export default function ConfirmaInformcacao() {

    const {id} = useParams()
    const ls = localStorage.getItem("formValues") || ""

    const {marca, modelo, kilometragem, ano, manuntencao} = JSON.parse(ls);

    const navegando = useNavigate();
    
    const orcamento = () => {
        navegando(`/orcamento/formulario/orcamento-final/${id}`)
    };

    const edicao = () => {
        localStorage.removeItem("FormValues")
        navegando(`/orcamento/formulario/${id}`)
    };

    return (
        <main>
            <section className={estilo.container}>
                <h2>
                    Confirme suas informações
                </h2>
                <ul>
                    <li><p>Marca</p><p>{marca}</p></li>
                    <li><p>Modelo</p><p>{modelo}</p></li>
                    <li><p>Ano</p><p>{ano}</p></li>
                    <li><p>Kilometragêm</p><p>{kilometragem}</p></li>
                    <li><p>Manutenção</p><p>{manuntencao}</p></li>
                </ul>   
                <div className={estilo.containerBotoes}>
                    <button onClick={edicao} className={`${botao.btn} ${botao.tertiary} ${botao.filled}`}>
                        Editar
                    </button>
                    <button onClick={orcamento} className={`${botao.btn} ${botao.primary} ${botao.filled}`}>
                        Confirmar
                    </button>
                </div>
            </section>
        </main>
    );
}