import Button from "../Button/Button";

export default function FormContato() {

    return (
        <>
        <form>
            <div>
                <label>Nome</label>
                <input type="text" placeholder="Digite seu nome" />
            </div>
            <div>
                <label>Email</label>
                <input type="text" placeholder="Digite seu email" />
            </div>
            <div>
                <label>Mensagem</label>
                <input type="text" placeholder="Digite sua mensagem ou dúvida" />
            </div>
            <Button href="submit" type="secondary" text="Enviar" filled={true}/>
        </form>
        </>
    )
}
