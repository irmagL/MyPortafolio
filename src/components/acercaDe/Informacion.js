import React from 'react';
import Paper from 'material-ui/Paper';

const Informacion = () => (
  <div className = "col-md-12" style = { estilo.contenedor }>
    <Paper style = { estilo.titulo }><h2> Acerca de </h2></Paper>

  </div>

);

const estilo = {
  contenedor: {
    marginTop: '20px'
  },
  titulo: {
    display: 'flex',
    alignItems: 'center'
  }
}


export default Informacion;
