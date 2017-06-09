import React from 'react';

const ZonaFlotante = ({ children }) => (
  <div style= {estilo.contenido}>
    { children }
  </div>

);

const estilo = {
  contenido: {
    position: 'fixed',
    bottom: '5%',
    right: '5%',
    display: 'flex',
    flexDirection: 'row'
  }
};

export default ZonaFlotante;
