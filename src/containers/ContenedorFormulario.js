import {reduxForm} from 'redux-form';

import { iniciaSubirContacto } from '../actions/contactos/actions';

import Formulario from '../components/contacto/Formulario';

const validate = values => {
  const errors = {};

  if (!values.nombre){
    errors.nombre= "Campo requerido";
  }

  if (!values.correo){
    errors.correo= "Campo requerido";
  }

  if (!values.mensaje){
    errors.mensaje= "Campo requerido";
  }

  return errors;
};

const onSubmit = (data, dispatch) => {
  dispatch(iniciaSubirContacto(data));
};

const Container = reduxForm({ //asigno formulario a redux
  form: 'form-contacto',
  onSubmit,
  validate
})(Formulario);

export default Container;
