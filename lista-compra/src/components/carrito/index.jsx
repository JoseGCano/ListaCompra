import { useContext } from "react"
import { CarritoContext } from "../../context/carritoContext"
import {BsCart4} from 'react-icons/bs'
import {BsFillCaretDownFill} from 'react-icons/bs'
import { useToggle } from "../../hooks/useToggle"


export const Carrito =()=>{
  const { list, addItemCarrito } = useContext(CarritoContext);

  const [state, toggle] = useToggle();


  
   

  return (
    <>
      <div style={{position: "relative",  display: "flex", justifyContent: "end" }}>
        {list.length > 0 ? (
          <span
            style={{
              alignContent: "center",
              textAlign: "center",
              fontSize: "1.5rem",
              backgroundColor: "green",
              borderRadius: "50%",
              width: "50px",
              fontWeight: "bold"
            }}
          >
            {list.length}
          </span>
        ) : null}
        <BsCart4 size={50} />
        <BsFillCaretDownFill onClick={toggle} style={{cursor: "pointer"}}/>
        {state ? <div style={{ backgroundColor: "white",position: "absolute", top: "50px", border: "solid black 1px", width: "250px"}}>
            <table>
                <thead>
                    <tr>
                        <th scope="col" >Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                        {list.length >0 ? list.map(ele=>
                            <tr key={ele.id}>
                                <td>{ele.nombre}</td>
                                <td>{ele.precio}€</td>
                                <td>{ele.cantidad}</td>
                            </tr>
                            ) 
                        : null
                    }
                </tbody>
            </table>   
        </div> : "No hay items en tu carrito"}
      </div>
    </>
  );
}