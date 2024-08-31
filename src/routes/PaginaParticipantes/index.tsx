import { Card } from "../../Components/Card/Card";
import fotoFelipe from "..//..//Assets/foto-felipe.jpg"
import fotoLucas from "..//..//Assets/foto-lucas.jpg"
import fotoMatheus from "..//..//Assets/foto-matheus.jpg"

export default function PaginaIntegrantes() {
    const turma: string = "Turma - 1TDSPY"

    const felipe = { nome: "Felipe Seiki Hashiguti", rm: "98985", hrefs: ["https://github.com/felipeSeiki", "https://www.instagram.com/felipeseiki18/", "https://www.linkedin.com/in/felipe-seiki-hashiguti/"] }
    const lucas = { nome: "Lucas Corradini Silveira", rm: "555118", hrefs: ["https://github.com/lu-corradini", "https://www.instagram.com/corradini_l12/", "https://www.linkedin.com/in/lucas-corradini-330856214/"] }
    const matheus = { nome: "Matheus Gregorio Mota", rm: "557254", hrefs: ["https://github.com/MatheusGmota", "https://www.instagram.com/theusz.g?igsh=MXJjMXNmazFkcjY2ag==", "https://www.linkedin.com/in/matheus-g-mota-/"] }

    const [gitFelipe, instaFelipe, lkdinFelipe] = felipe.hrefs
    const [gitLucas, instaLucas, lkdinLucas] = lucas.hrefs
    const [gitMatheus, instaMatheus, lkdinMatheus] = matheus.hrefs


    return (
        <main>
            <h1>Página dos integrantes</h1>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridAutoRows: "15%", width: "80%" }}>
                <Card
                    title={felipe.nome}
                    type="secondary"
                    image={fotoFelipe}
                    bodyText={[felipe.rm, turma]}
                    hrefGit={gitFelipe}
                    hrefInsta={instaFelipe}
                    hrefLkdin={lkdinFelipe}
                />
                <Card title={lucas.nome}
                    type="secondary"
                    image={fotoLucas}
                    bodyText={[lucas.rm, turma]}
                    hrefGit={gitLucas}
                    hrefInsta={instaLucas}
                    hrefLkdin={lkdinLucas}
                />
                <Card title={matheus.nome}
                    type="secondary"
                    image={fotoMatheus}
                    bodyText={[matheus.rm, turma]}
                    hrefGit={gitMatheus}
                    hrefInsta={instaMatheus}
                    hrefLkdin={lkdinMatheus}
                />
            </div>
            <a target="_blank" style={{ textDecoration: "underline" }} href="https://github.com/MatheusGmota/CarRepair">
                <h3>
                    Link do repositorio git
                </h3>
            </a>
        </main>
    )
}