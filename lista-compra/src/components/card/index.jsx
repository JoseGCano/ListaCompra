import {BsCartPlus} from 'react-icons/bs'
import {BsFillCartCheckFill} from 'react-icons/bs'
import './style.css'
import { useContext } from 'react'
import { CarritoContext } from '../../context/carritoContext'

export const Card = ({imagen, nombre, descripcion, precio, unidadesDisp})=>{

    const {list, addItemCarrito} = useContext(CarritoContext)

    const agregarItemCarrito=(nombre, precio)=>{

        addItemCarrito(...list, {
            nombre,
            precio
        })

        console.log(list)
    }

    return (
        <div style={{display: "flex", width: "350px",height: "300px", flexDirection: 'column',boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}>
            <div>
                <h4>{nombre.toUpperCase()}</h4>
            </div>
            <div style={{borderBottom: "black 1px solid", borderTop: "black 1px solid"}}>
                <img src={imagen} altP={imagen}/>
                <h6>{descripcion}</h6>
            </div>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap : 15}}>
                <p>Precio: <strong>{precio}€"</strong></p>
                <p>Stock: <strong>{unidadesDisp <= 0 ? "Sin Stock" : unidadesDisp}</strong></p>
            </div>
            <div>
                {unidadesDisp <= 0 ? null : <BsCartPlus onClick={()=>agregarItemCarrito(nombre, precio)} size={30} style={{cursor:"pointer"}} className='Carrito'/>}
            </div>
        
        </div>
    )
}