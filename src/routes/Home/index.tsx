import Button from "../../Components/Button/Button";
import { Card } from "../../Components/Card/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

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
                <div>
                    <Card 
                    image="https://images.unsplash.com/1/type-away.jpg" 
                    icon={<FontAwesomeIcon icon={faEnvelope} />} 
                    title="Chatbot" 
                    subtitle="RM-98634 Turma-1tdsy"
                    type="secondary" 
                    hrefSocialMedia={["blablaba","sfa","afs"]}>
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
        </main>
    )
}