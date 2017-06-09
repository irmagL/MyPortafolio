import React from 'react';

const Pie = () => (
  <div style= { estilo.contenedor }>
    <span style= { estilo.texto }>
    Irma Garcia Leon | 2017 | Todos los Derechos Reservados</span>
  </div>

);

const estilo = {
  contenedor: {
    height: '140px',
    backgroundColor: '#22252C',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '10px',
    marginTop: '50px'
  },
  texto: {
    fontSize: '16px',
    color: '#ffffff'
  }

};

export default Pie;
