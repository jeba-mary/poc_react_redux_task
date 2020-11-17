import { SIGN_IN} from '../actions';

const initialState = {
  user: []
}

export default function reducer(state = initialState, action={})
{
  switch(action.type) {
    case SIGN_IN:
      const { user } = state;
        localStorage.setItem('users', JSON.stringify(user))

        return { ...state, user: [action.user].concat(user)}
    default:
      return state;
  }
}

