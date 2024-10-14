import React from 'react'
import datos from './asyncMock.json'


export const getProducts = () =>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(datos)
        }, 500)
        
    })
}

export const getProductByID = (productID)=> {
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(datos.find(prod =>prod.id === productID))
        }, 500)
    })
}

export const getProductsByCategory = (productCategory)=> {
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(datos.find(prod =>prod.category === productCategory))
        }, 500)
    })
}