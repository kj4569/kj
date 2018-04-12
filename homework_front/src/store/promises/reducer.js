import { initialState } from './selectors'

const promises_reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_Promise':
      return [
        ...state,
        {
					id: promise.id,
					sinceWhen: promise.sinceWhen,
          tilWhen: promise.tilWhen,
          user2: promise.user2
				}
      ]
}
}

export default promises_reducer
