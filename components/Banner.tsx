import React from 'react'

export const Banner = () => {
  return (
    <div>
        <img src="./logo2.png" alt='promo'className="img-responsive center-block" style={{ width: '50%' , lineHeight: '10px'}}/>

         <p>
            <b>
            Telcel no es responsable del servicio, publicidad y contenido de la promoción. Responsable de la promoción Airmovil, S.A. de C.V. Consulta las bases en http://arv.mx/fidofertas  
            </b> 
         </p>

        <div>
         </div>

            <div id="alert">
            <div>  
            <div id="session-trivia"></div>
            <h3>
              <b>Número de teléfono</b>
            </h3>
              <input type="tel" placeholder="Ingresa tu teléfono aquí" id="phone" className="responsive center-block" ></input>
              <button id="btn-start" style={{width: '100%', background: '#57B947'}}></button>
              <button id="btn-start" style=" responsive center-block  width: 100%; background: #57B947; border-radius: 5px; color: #fff; margin-top: 10px; margin-bottom: 10px; padding: 5px;">
                Iniciar
              </button>

              <button id="btn-pin" className="esponsive center-block background: none; border: none; color: #384662;">
              Pin activación
              </button>
             </div>
        </div>
      </div>
  )
}
