import { Grid } from '@mui/material';
import React from 'react'
import Autpro from './Autpro';



const Autmn = ({onAddtwo,autcloth}) => {


  return (
    <Grid>
    <h2 style={{ textAlign:"center" }}>Autumn clothes</h2>
    <div className="result">
      {autcloth.map((producttwo) => (
        <Autpro key={producttwo.id} producttwo={producttwo} onAddtwo={onAddtwo} />
      ))}
    </div>

  </Grid>
  )
}

export default Autmn;