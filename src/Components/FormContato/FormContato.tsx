import { useState } from "react";
import Button from "../Button/Button";
import styles from "./FormContato.module.css"

export default function FormContato() {

    const [userName, setName] = useState("");
    const [userEmail, setEmail] = useState("");
    const [message, setMessage] = useState("");
  

  const handelSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    if(userName && userEmail && message){
        localStorage.setItem("name", userName);
        localStorage.setItem("email", userEmail);
        localStorage.setItem("message", message);
        alert("Muito obrigado por nos contatar! Fique de olho no seu email.")
    }else{
        alert("Por favor preencha todos os dados");
    }
  }

    return (
        <>
        <form onSubmit={handelSubmit} className={styles.forms}>
            <div className={styles.wrap}>
                <div>
                    <label className={styles.label}>Nome</label>
                    <input onChange={(e)=>(setName(e.target.value))} type="text" placeholder="Digite seu nome" />
                </div>
                <div>
                    <label className={styles.label}>Email</label>
                    <input onChange={(e)=>(setEmail(e.target.value))} type="text" placeholder="Digite seu email" />
                </div>
            </div>
            <div>
                <label className={`${styles.label} ${styles.lblMensagem}`}>Mensagem</label>
                <textarea onChange={(e)=>(setMessage(e.target.value))} className={styles.txtarea} placeholder="Digite sua mensagem ou dúvida" />
                <Button href="submit" type="secondary" text="Enviar" filled={true}/>
            </div>
        </form>
        </>
    )
}
