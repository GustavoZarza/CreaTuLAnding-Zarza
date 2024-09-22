import icon from './Assets/icono.png'
import { useState } from 'react'
export const CartWidget =() =>{
    const [updater, setUpdater]= useState(0)
    const handleUpdate = () =>{
        setUpdater(updater +1)
    }
    return(
        <>
            <img src={icon} alt="" width={30} />
            <small style={{fontSize:30}}>Actualizaciones pendientes:  {updater} </small>
            <button onClick={handleUpdate}>Actualizar</button>
        </>
    )
}