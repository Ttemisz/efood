import { Link } from "react-router-dom"
import { Fragmento } from "../Restaurantes"
import { Header } from "./style"
import  {open}  from '../../store/reducers/cart'
import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../../store"

const Headerperfil = () =>{

    const dispatch = useDispatch()
    const {items}=useSelector((state:RootReducer)=>state.cart)

    const openCart = () => {
        dispatch(open())
    }
    
    return(
        <Header>
            <div>
                <Link to='/' style={{ textDecoration: 'none' }}><Fragmento size="big" >Restaurantes</Fragmento></Link>
                <img src="/efood.png"  />
                <Fragmento  onClick={openCart} size="big"> {items.length} Produto(s) no carrinho</Fragmento>
                
            </div>
        </Header>
)
}

export default Headerperfil