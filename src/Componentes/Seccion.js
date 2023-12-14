import React from 'react'
import ListaTarjetas from './ListaTarjetas'

const Seccion = () => {
  return (
    <>
      <div className='seccionHoppy'>
        <h1>Year Round</h1>
        <ListaTarjetas />
      </div>
      <style jsx>
        {`
        .seccionHoppy {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        h1 {
          padding-bottom: 20px

        }

        `}
      </style>
    </>
  )
}

export default Seccion