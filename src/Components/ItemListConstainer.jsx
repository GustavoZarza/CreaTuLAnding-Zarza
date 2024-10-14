import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory} from "./asyncMock"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

export const ItemListContainer =({greeting})=>{

    const [products, setPruducts] = useState([])
    
    const{categoryId} = useParams()

    useEffect(()=>{
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
        .then(response => {
            setPruducts(response)
        })
        .catch(error =>{
            console.error(error)
        })
    }, [categoryId])
    


    return (
        <>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </>
    )

}

