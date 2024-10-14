import {Link } from "react-router-dom"
const Item = ({id, name, img, saldo, movimientos})=>{
    return(
        <>
        <h2>{name}</h2>
        <img src={img} alt={name} className="ItemImg" />
        <p> Saldo: ${saldo}</p>
        <p> Movimientos: {movimientos} </p>
        <Link to={`/item/ ${id} `} className='Option'>Ver Detalle</Link>
        </>
    )
}
export default Item