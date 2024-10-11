import { Fragmento } from "../Restaurantes"
import { Rodape, Rodapelinks} from "./style"

const Footer = () =>(

        <Rodape>
        <img src="/efood.png" alt="" />
        <Rodapelinks>
            <li>
                <img src="/instagramlg.png" alt="" />
            </li>
            <li>
                <img src="/facebooklg.png" alt="" />
            </li>
            <li>
                <img src="/twitterlg.png" alt="" />
            </li>
        </Rodapelinks>
            <Fragmento>
                <p>
                    A efood é uma plataforma para divulgação de estabelecimentos,
                    a responsabilidade pela entrega, 
                    qualidade dos produtos é toda do estabelecimento contratado. 
                </p>
            </Fragmento>
    </Rodape>

)

export default Footer