import { React, useState } from 'react'
import './App.css'
import Header from './componentes/Header'
import Formulario from './componentes/Formulario'
import Resultado from './componentes/Resultado'
import Mensaje from "./componentes/Mensaje";
function App() {  
    const [cantidad, setCantidad] = useState(0);
    const [plazo, setPlazo] = useState("");
    const [total, setTotal] = useState(0);
    let componente:any
if (total == 0) {
  componente = <Mensaje />
}else {
    componente = <Resultado total={total} cantidad={cantidad} plazo={plazo} />
}
  return (
    <>
    <Header />
    <div className="container">
  <Formulario 
  cantidad={cantidad}                                     
  setCantidad={setCantidad}
  plazo={plazo}                
  setPlazo={setPlazo}
  setTotal={setTotal}
  />
    </div>
    <div>
    {componente}
    </div>
    </>
  )
}

export default App
