import { useState } from "react";
const ItemCount = ({saldo, initial, onAdd}) => {
    const[quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < saldo ) {
            setQuantity(quantity+100)
        }
    }
    const decrement =() =>{
        if (quantity>100) {
            setQuantity(quantity-100)
        }
    }
    return(
        <>
        <button className="Button" onClick={decrement}>-</button>
        <h4 className="Number">{quantity}</h4>
        <button className="Button" onClick={increment}>+</button>
        <button className="Button" onClick={()=> onAdd(quantity)} disabled={!saldo}>Extraer de la cuenta</button>
        </>
    )

}

export default ItemCount