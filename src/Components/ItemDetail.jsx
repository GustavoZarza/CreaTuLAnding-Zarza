import ItemCount from "./Contador";



const ItemDetail = ({name, img, category, description, saldo}) =>{
    return(
        <>
                
                <h2>{name}</h2>
                <img src={img} alt={name} className="ItemImg" />
                <p>Categoria: {category}</p>
                <p>Descripcion: {description}</p>
                <p>Saldo: ${saldo}</p>
                <ItemCount initial={1} saldo={saldo} onAdd={(quantity)=> console.log("cantidad agregada", quantity)} />
        </>
    )
}

export default ItemDetail