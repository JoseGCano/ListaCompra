import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ProductList } from './components/productList'
import lista from './assets/productList.json'
import { Carrito } from './components/carrito'

function App() {
  
  

  return (
    <div>
      <Carrito />
      <ProductList listaProductos={lista}/>
    </div>
  )
}

export default App
