import { Fragmento } from "../Restaurantes"
import { Header } from "./style"

const Headerperfil = () =>(
        <Header>
            <div>
                <Fragmento size="big">Restaurantes</Fragmento>
                <img src="public/efood.png"  />
                <Fragmento size="big"> 0 Produto(s) no carrinho</Fragmento>
            </div>
        </Header>
)

export default Headerperfil