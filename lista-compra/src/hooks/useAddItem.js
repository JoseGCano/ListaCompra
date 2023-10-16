import { useState } from "react"




export const useAddItem = ()=>{

    const [items, setItems] = useState([])

    const addItemCarrito = (newItem)=>{
        
        setItems([...items, newItem])
    }


    return [items, addItemCarrito]
}