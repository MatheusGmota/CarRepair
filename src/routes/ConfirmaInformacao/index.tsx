import estilo from "./Confirmacao.module.css"
import botao from "../../Components/Button/Button.module.css"

export default function ConfirmaInformcacao() {
    return (
        <main>
            <section className={estilo.container}>
                <h2>
                    Confirme suas informações
                </h2>
                <ul>
                    <li><p>Marca</p><p>XXXX</p></li>
                    <li><p>Modelo</p><p>XXXX</p></li>
                    <li><p>Ano</p><p>XXXX</p></li>
                    <li><p>Kilometragêm</p><p>XXXX</p></li>
                    <li><p>Manutenção</p><p>XXXX</p></li>
                </ul>   
                <div className={estilo.containerBotoes}>
                    <button className={`${botao.btn} ${botao.tertiary} ${botao.filled}`}>
                        Editar
                    </button>
                    <button className={`${botao.btn} ${botao.primary} ${botao.filled}`}>
                        Confirmar
                    </button>
                </div>
            </section>
        </main>
    );
}