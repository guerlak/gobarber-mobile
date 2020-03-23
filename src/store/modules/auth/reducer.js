const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGNIN_REQUEST':
      return {...state, loading: true};
    case '@auth/SIGNIN_SUCCESS':
      return {
        ...state,
        token: action.payload.token,
        signed: true,
        loading: false,
      };
    case '@auth/SIGNIN_FAILURE':
      return {
        ...state,
        loading: false,
      };
    case '@auth/LOGOUT':
      return {
        token: null,
        loading: false,
        signed: false,
      };
    default:
      return state;
  }
}
