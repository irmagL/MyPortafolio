import React from 'react';
import Paper from 'material-ui/Paper';

import ContenedorFormulario from '../../containers/ContenedorFormulario';
import MisDatos from './MisDatos';

const Contacto = () => (
  <div className= "col-md-12" style={ estilo.contenedor }>
    <div style= { estilo.titulo }>
      <h2>Ponte en contacto conmigo</h2>
    </div>

    <Paper style= { estilo.formulario } >
        <div>
          <ContenedorFormulario/>
          <MisDatos/>
        </div>
    </Paper>
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
  },
  formulario: {
    height: '400px',
    marginTop: '10px',
  }
};


export default Contacto;
