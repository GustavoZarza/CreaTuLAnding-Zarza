import { CartWidget } from "./CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"
export const NavBar = () =>{

    return(
        <nav className="NavBar">
        <Link to='/'>
            <h1 style={{background:"#AA1638"}}>FINGZ</h1>
        </Link>
        <div className="Categorias">
            <NavLink to={' /category/BancosMonedaExtrajera'} >Bancos Moneda Extranjera</NavLink>
            <NavLink to={' /category/Bancos'} >Bancos</NavLink>
            <NavLink to={' /category/BilleteraVirutal'} >Billeteras Virtuales</NavLink>
        </div>
        <CartWidget />
        </nav>
       


   
    )
}