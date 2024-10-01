import Produtos from "../../Produtos"
import Apresentacao from "../../Apresentacao"
import Footer from "../../footer"
import Headerperfil from "../../Header"
import { Fundo } from "./style"


const Perfil =() => (
    <Fundo>
        <Headerperfil></Headerperfil>
        <Apresentacao></Apresentacao>
        <Produtos></Produtos>
        <Footer></Footer>
    </Fundo>
    
)

export default Perfil