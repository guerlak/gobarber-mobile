export function signInRequest(email, password) {
  return {
    type: '@auth/SIGNIN_REQUEST',
    payload: {
      email,
      password,
    },
  };
}
export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGNIN_SUCCESS',
    payload: {
      token,
      user,
    },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGNIN_FAILURE',
  };
}

export function signUpRequest(name, email, password) {
  return {
    type: '@auth/SIGNUP_REQUEST',
    payload: {
      name,
      email,
      password,
    },
  };
}
export function logout() {
  return {
    type: '@auth/LOGOUT',
  };
}
