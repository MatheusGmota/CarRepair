import Button from "../../Components/Button/Button";
import estilo from "./Orcamento.module.css";

export default function Orcamento() {
    return (
        <main className={estilo.main}>
            <section className={estilo.mainSection}>
                <article>
                    <h2 className={estilo.h2}>
                        Qual ferramenta deseja usar?
                    </h2>
                </article>
                <section className={estilo.sectionBox}>
                    <article>
                        <div className={estilo.chat}>
                            <article>
                                <h3>
                                    Chatbot
                                </h3>
                            </article>
                            <ul>
                                <li>Orçamentos precisos.</li>
                                <li>Esclarece dúvidas técnicas.</li>
                                <li>Ideal para quem desconhece o problema do veículo.</li>
                                <li>Rápido e conveniente.</li>
                            </ul>
                            <article>
                                <Button type="primary" href="/orcamento/chatbot/:id" text="Gerar Orçamento" filled={true}/>
                            </article>
                        </div>
                        <div className={estilo.forms}>
                            <article>
                                <h3>
                                    Formulário
                                </h3>
                            </article>
                            <ul>
                                <li>Preenchimento rápido.</li>
                                <li>Orçamento 100% assertivo em minutos.</li>
                                <li>Ideal para quem já sabe o problema do veículo.</li>
                            </ul>
                            <article>
                            <Button type="primary" href="/orcamento/formulario/:id" text="Gerar Orçamento" filled={true}/>
                            </article>
                        </div>
                    </article>
                </section>
            </section>
        </main>
    );
}