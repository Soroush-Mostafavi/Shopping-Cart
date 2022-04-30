import React from 'react'
import Autpro from './Autpro';



const Autmn = ({onAddtwo,autcloth}) => {


  return (
    <main>
    <h2 style={{ textAlign:"center" }}>Autumn clothes</h2>
    <div className="result">
      {autcloth.map((producttwo) => (
        <Autpro key={producttwo.id} producttwo={producttwo} onAddtwo={onAddtwo} />
      ))}
    </div>;

  </main>
  )
}

export default Autmn;