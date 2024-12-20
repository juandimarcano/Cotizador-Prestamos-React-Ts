import React from 'react'
 type ResultadoProps = {
   total: number;
   cantidad: number;
   plazo: number;
 }
export default function Resultado({total, cantidad, plazo}: ResultadoProps) {
  return (
     <div className="resultado">  
     <strong>
      <h2 style={{textAlign:'center'}}>Cotizacion:</h2>
       <p>La cantidad solicitada es: $ {cantidad}</p>
       <p>A paga en: $ {plazo} Meses</p>        
       <p>Su pago mensual es de: $ {(total / plazo).toFixed(2)}</p>
      <p>Total a pagar: $ {(total.toFixed(2))}</p>
      </strong>
      </div>
  )
}

