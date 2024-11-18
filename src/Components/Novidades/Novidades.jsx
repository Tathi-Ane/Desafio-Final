import cafe from "../../assets/images/grao.png"
import {Section} from "./style"

export default function Novidades () {
    return (
        <Section>
             <img src={cafe} alt="" />
            
            <h3> Preparação </h3>
            <h2>Níveis de Torra</h2>
            <p>Escolha sua Torra Starbucks: 
                Torra Clara
                Torra Média
                Torra Escura

                Cada Torra Starbucks de acordo com seu gosto!

            </p>


        </Section>
    )
}