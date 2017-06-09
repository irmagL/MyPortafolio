import * as types from '../constants/ActionTypes';

const estadoInicial = {
  guardando: null,
  error: null,
  guardado: null
};

const ContactoReducer = ( state = estadoInicial, action ) => {
  switch (action.type) {
    case types.SUBIR_CONTACTO_INICIADO:
      return {
        ...state,
        guardando: true,
        error: null
      };
    case types.SUBIR_CONTACTO_FINALIZADO:
      return {
        ...state,
        guardando: false,
        guardado: action.payload
      };
    case types.SUBIR_CONTACTO_ERROR:
    return {
      ...state,
      guardando: false,
      error: action.error
    };
    default: return state;

  }
};

export default ContactoReducer;
