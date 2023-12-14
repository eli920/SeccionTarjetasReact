import React from "react";
import { useState } from "react";

const initialState = false;
const Tarjeta = (props) => {
  const { nombreFantasia, estilo, ABV, imagenFront, imagenBack } = props.cerveza;
  const [hovered, setHovered] = useState(initialState);
  return (
    <>
      <div className='tarjeta'>
        <div className='descripcion'>
          <h2>{nombreFantasia}</h2>
          <h3>{estilo}</h3> <h3>{ABV}</h3>
        </div>
        <div
          className={hovered ? ("tarjeta-hover") : ("tarjeta-nohover")}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(initialState)}
        >
          <img src={hovered ? (imagenBack) : (imagenFront)} alt={estilo} />
        </div>
      </div>
      <style jsx>
        {`
      
        .tarjeta {
            max-width: 267px;
            height: auto;
          }

        .tarjeta-nohover {
          transform: rotateY(180deg)
        }
        .tarjeta-hover {
          
          transition: transform 1.5s
        }
        
        .descripcion{
            width: 100%;
            font-family: 'founders';
        }
          
        .descripcion h2 {
            text-align: left;
            font-size: 1.2rem;
            font-weight: lighter;
            padding-bottom: 5px
          }
          
        .descripcion h3 {
            float: left;
            font-size: 0.70rem;
            font-weight: bolder;
            text-transform: uppercase;
            padding-bottom:20px
          }

        .descripcion h3:last-child {
            float: right;
          }
          
        img {
            width:100%
        }
        `}
      </style>
    </>
  )
}

export default Tarjeta