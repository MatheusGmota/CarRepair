import Button from "../../Components/Button/Button";
import { Card } from "../../Components/Card/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandHoldingDollar, faComments, faWrench, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import FormContato from "../../Components/FormContato/FormContato";
import styles from "./Home.module.css"

export default function Home() {
    return(
        <main>
            <article>
                <h3>Quem nós somos?</h3>
                <p>Somos uma equipe de estudantes apaixonados por tecnologia e inovação. Unimos nossas habilidades e conhecimentos para enfrentar desafios reais do mercado, aplicando conceitos aprendidos em sala de aula para criar soluções práticas e eficazes. Nosso objetivo é transformar ideias em projetos que façam a diferença, sempre com foco em qualidade, inovação e aprendizado contínuo.</p>
            </article>
            <article>
                <h3>Nosso objetivo</h3>
                <p>Fomos desafiados pela Porto Seguro a desenvolver um programa que melhore a jornada e a experiência do cliente durante a manutenção automotiva. Nosso foco está em criar soluções tecnológicas para oferecer diagnósticos automáticos rápidos, orçamentos precisos usando inteligência artificial e automatizar todo o processo de manutenção, desde o agendamento até a finalização do serviço.</p>
            </article>
            <article>
                <h3>Ferramentas</h3>
                <div className={styles.cardContent}>
                    <Card  
                    icon={<FontAwesomeIcon icon={faHandHoldingDollar} />} 
                    title="Orçamento"
                    description="Utilize nossa ferramenta para gerar um orçamento preciso e detalhado para a manutenção do seu veículo, com base nas necessidades específicas do seu automóvel."
                    type="primary">
                    </Card>

                    <Card  
                    icon={<FontAwesomeIcon icon={faComments} />} 
                    title="Chatbot"
                    description="Nosso chatbot inteligente está pronto para ajudá-lo com orçamentos e responder a perguntas técnicas, como troca de óleo, a qualquer hora do dia."
                    type="primary">
                    </Card>

                    <Card  
                    icon={<FontAwesomeIcon icon={faWrench} />} 
                    title="Mecânicas"
                    description="Faça uma estimativa de custos personalizada para o seu projeto em apenas alguns cliques. Simples, rápido e preciso."
                    type="primary">
                    </Card>

                    <Card  
                    icon={<FontAwesomeIcon icon={faCalendarDays} />} 
                    title="Agendamento" 
                    description="Simplifique o processo de agendamento de serviços com nosso sistema integrado, que permite marcar sua próxima visita ao centro automotivo de forma rápida e fácil."
                    type="primary">
                    </Card>
                </div>
            </article>
            <article>
                <h3>Gerar Orçamento</h3>
                <p>Obtenha uma estimativa personalizada e precisa para a manutenção do seu veículo, utilizando nossas ferramentas automatizadas para facilitar o planejamento e a execução dos serviços necessários.</p>
                <div>
                    <Button href="/orcamento" text="Gerar Orçamento" type="tertiary" filled={true}/>
                </div>
            </article>
            <article>
                <h3>Contate-nos</h3>
                <FormContato/>
            </article>
        </main>
    )
}