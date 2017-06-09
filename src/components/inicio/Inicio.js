import React from 'react';
import Paper from 'material-ui/Paper';

const Inicio = () => (
  <div className = "col-md-12" style = { estilo.contenedor }>
    <Paper style = { estilo.titulo }><h2> Bienvenidos a mi Portal </h2></Paper>
  </div>
);

const estilo = {
  contenedor: {
    marginTop: '20px'
  },
  titulo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}

export default Inicio;
