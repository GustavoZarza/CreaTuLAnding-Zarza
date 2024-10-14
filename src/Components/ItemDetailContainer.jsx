import { useState, useEffect } from "react";
import { getProductByID } from "./asyncMock";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer =()=>{
    const[product, setProduct] = useState(null)

    const {itemId} = useParams()

    useEffect(()=>{
        getProductByID(itemId)
        .then(response =>{
            setProduct(response)
        })
        .catch(error =>{
            console.log(error)
        })
    }, [itemId])
    return(
        <>
            <ItemDetail {...product} />
        </>
    )
}

export default ItemDetailContainer