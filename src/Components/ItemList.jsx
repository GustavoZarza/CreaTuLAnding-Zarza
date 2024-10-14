import Item from "./Item"
const ItemList = ({products}) =>{
    return(
        <>
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </>
    )
}
export default ItemList

//componente de presentacion