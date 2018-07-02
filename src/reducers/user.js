export default function user(state = {
  username: '👽',
  isAuthenticating: false,
}, action) {
  switch (action.type) {
    case 'LOGIN_REQUESTED': {
      return {
        username: action.username,
        isAuthenticating: true,
      }
    }

    default:
      return state;
  }
}
