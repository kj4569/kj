import { initialState } from './selectors'


const login_reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return [
        ...state,
        {
					userId: action.userId,
				}
      ]
    default:
      return state
  }
}

export default login_reducer
