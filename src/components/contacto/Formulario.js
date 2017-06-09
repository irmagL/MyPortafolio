import React, { Component } from 'react';
import { TextField, RaisedButton, FloatingActionButton } from 'material-ui';
import { Field } from 'redux-form';
import { Link } from 'react-router';
import Guardar from 'material-ui/svg-icons/content/save';
import Atras from 'material-ui/svg-icons/navigation/arrow-back';

import ZonaFlotante from '../zonaFlotante/ZonaFlotante';

const renderField = ({ input, label, type, meta: { touched, error, warning }, hint, onKeyDown, ref, autoFocus, multiLine, rows }) => (
  <TextField
    errorText= { touched && error }
    autoComplete= "off"
    autoFocus= { autoFocus }
    hintText= { hint }
    floatingLabelText= { label }
    floatingLabelFixed
    fullWidth
    type= { type }
    multiLine= { multiLine }
    rows= { rows }
    onKeyDown= { onKeyDown }
    { ...input }
  />
);

class Formulario extends Component {

  render() {

    const { handleSubmit } = this.props;


    return (
      <div className= "col-md-6">
        <form>
          <Field
            autoFocus
            type= "text"
            name= "nombre"
            label= "Nombre: "
            hint= "Escribe tu Nombre"
            component= { renderField }
          />
          <Field
            type= "email"
            name= "correo"
            label= "Correo Electronico"
            hint= "Escribe tu Correo electronico"
            component= { renderField }
          />
          <Field
            type="text"
            name= "mensaje"
            label= "Mensaje"
            hint= "Escribe tu Mensaje"
            multiLine= { true }
            rows= { 2 }
            component= { renderField }
          />
          <ZonaFlotante>
            <Link to= "/">
              <FloatingActionButton style= {{ marginRight: '10px' }}>
                <Atras color= "#FFFFFF"/>
              </FloatingActionButton>
            </Link>
            <FloatingActionButton onClick= { () => handleSubmit() }>
              <Guardar color= "#FFFFFF"/>
            </FloatingActionButton>
          </ZonaFlotante>
        </form>
      </div>
    );
  }

}

export default Formulario;
