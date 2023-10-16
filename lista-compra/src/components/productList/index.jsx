import { useState } from "react"
import { Card } from "../card"



export const ProductList = ({listaProductos})=>{

    const [formDataSearch, setFormDataSearch] = useState({
        search: "",
        checkbox: false
    })
  
   

    const onChangeHandler =(e)=>{
        if (e.target.name != "checkbox"){
            setFormDataSearch({
                ...formDataSearch,
                [e.target.name] : e.target.value
            })
        }else {
            setFormDataSearch({
                ...formDataSearch,
                [e.target.name] : e.target.checked
            })
        }
    }
    
    const filterFunction = ()=>{
        
        const resultado = listaProductos.filter(e=> 
                e.nombre.toLowerCase().includes(formDataSearch.search.toLowerCase()) || 
                e.descripcion.toLowerCase().includes(formDataSearch.search.toLowerCase()))
        return resultado
    } 
    
    return (
        <div style={{}}>
            <section style={{marginBottom: "20px"}}>
                <input name="search" type="search" onChange={onChangeHandler}/>
                <label htmlFor="stock" >Con stock</label>
                <input name="checkbox" id="stock" type="checkbox" onChange={onChangeHandler}/>
            </section>
            <section style={{display: "flex", gap: 20, flexWrap: "wrap"}}>
                {filterFunction().map(e=>
                    <Card 
                        descripcion={e.descripcion} 
                        imagen={e.imagen}
                        nombre={e.nombre}
                        precio={e.precio}
                        unidadesDisp={e.unidadesDisp}
                        key={e.nombre + Math.random()*1000}
                        />
                )}
            </section>
        </div>
    )
}