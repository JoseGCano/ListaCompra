import { createContext } from "react";
import { useAddItem } from "../hooks/useAddItem";

const CarritoContext = createContext({
    list: [],
    addItemCarrito: ()=>{}
})

export {CarritoContext}

const CarritoContextProvider =({children})=>{

    const [items, addItemCarrito] = useAddItem()


    const contextValue ={
        list: items,
        addItemCarrito: addItemCarrito
    }



    return <CarritoContext.Provider value={contextValue}>
        {children}
    </CarritoContext.Provider>
    
}


export {CarritoContextProvider}