import { CartWidget } from "./CartWidget/CartWidget"
export const NavBar = () =>{
    
    const buildingSite =()=>{
        alert('Sitio en construcción')

    }
    return(
        <>
        <h1 style={{background:"#AA1638"}}>FINGZ</h1>
        <div>
            <button className="NavBar" onClick={buildingSite}>Resumen</button>
            <button className="NavBar" onClick={buildingSite}>Agregar gastos o ingresos</button>
            <button className="NavBar" onClick={buildingSite}>Secciones</button>
        </div>
        <CartWidget />
    </> 
    )
}