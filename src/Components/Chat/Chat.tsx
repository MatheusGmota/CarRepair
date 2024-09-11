import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Chat.module.css"


export default function Chat() {
    const {id} = useParams()
    const [messages, setMessages] = useState<string[]>([])
    const [newMessage, setnewMessage] = useState('')

    useEffect(() => {
        // Lógica para carregar mensagens anteriores (se necessário)
        // Por exemplo, se você tivesse dados em localStorage:
        const savedMessages = localStorage.getItem('chatMessages');
        if (savedMessages) {
          setMessages(JSON.parse(savedMessages));
        }
      }, [id]);

      const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setnewMessage(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (newMessage.trim() !== '') {
      setMessages([...messages, newMessage]);
      setnewMessage('');
      // Salvar as mensagens no localStorage (opcional)
      localStorage.setItem('chatMessages', JSON.stringify(messages));
    }
  };

    return (
        <div className={styles.container}>
        <div className={styles.messages}>
            {messages.map((message, i) => (
              <>
                <article className={`${styles.message} ${styles.user}`} key={i}><p>{message}</p></article>
                <article className={`${styles.message} ${styles.chatbot}`} key={i}><p>{message}</p></article>
              </>
            ))}
        </div>
        <form className={styles.inputWrap} onSubmit={handleSubmit}>
            <input type="text" value={newMessage} onChange={handleInputChange} placeholder="Digite sua mensagem..."/>
            <button type="submit">enviar</button>
        </form>
        </div>
    )
}