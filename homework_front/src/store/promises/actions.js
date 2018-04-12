let nextPromiseId = 0
export const addPromise = (sinceWhen, tilWhen, user2) => {
    return {
	type: 'ADD_Promise',
	id: nextPromiseId++,
  sinceWhen,
  tilWhen,
  user2
    }
}

export const POST_PROMISE_REQUEST = 'POST_PROMISE_REQUEST'

export const postPromiseRequest = (sinceWhen, tilWhen, user2) => {
    return {
	type: POST_PROMISE_REQUEST,
	sinceWhen,
  tilWhen,
  user2
    }

}
