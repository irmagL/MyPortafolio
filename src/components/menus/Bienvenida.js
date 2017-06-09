import React, { Component } from 'react';

const Bienvenida = () => (
  <div style= { estilo.contenedor }>
    <div>
      <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-c5703.appspot.com/o/imagenes%2Firmaa.jpg?alt=media&token=e7a32c2b-0013-4774-980c-5db31b4b39bb"  style= { estilo.foto }/>
    </div>
    <span style= { estilo.titulo }>Mi Portafolio</span>

  </div>
);

const estilo = {
  contenedor: {
    backgroundColor: '#ffffff',
    height: '351px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  foto: {
    width: '200px',
    height: '200px',
    borderRadius: '100px'
  },
  titulo: {
    fontSize: '40px'
  }

};

export default Bienvenida;
