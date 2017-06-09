import { firebaseRef } from '../../firebase';
import { reset } from 'redux-form/lib/actions';

import * as types from '../../constants/ActionTypes.js';

export const subirContactoIniciado= () => ({ type: types.SUBIR_CONTACTO_INICIADO });
export const subirContactoFinalizado= payload => ({ type: types.SUBIR_CONTACTO_FINALIZADO, payload });
export const subirContactoError= error => ({ type: types.SUBIR_CONTACTO_ERROR, error });

export const iniciaSubirContacto = (data) => {
  return dispatch => {
    dispatch(subirContactoIniciado());

    firebaseRef.child('contacto').push(data)
      .then(()=> {
        dispatch(subirContactoFinalizado('Los datos se han almacenado'));
        dispatch(reset('form-contacto'));
      })
      .catch(() => dispatch(subirContactoError('Ha ocurrido un error')));
  }
};
