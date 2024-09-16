import Button from "../Button/Button";
import estilo from "./OrcFinal.module.css"

export default function OrcamentoFinal() {
    return (
        <main>
            <h2>Orcamento</h2>
                <section className={estilo.containerContent}>
                    <div className={estilo.orcamento}>
                        <h3>O orçamento para o reparo xxxxxxx é de:</h3>
                        <h3>R$1000,00</h3>
                    </div>
                    <div className={estilo.links}>
                        <a href="">Gerar link do relatorio</a>
                        <Button text="Agendar Consulta" filled={true} href="#" type="primary"/>
                    </div>
                </section>
        </main>
    );
}