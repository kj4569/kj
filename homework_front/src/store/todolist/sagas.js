import { take, put, call, fork } from 'redux-saga/effects'
import api from 'services/api'
import * as actions from './actions'

const url = 'http://0.0.0.0:8000/promises/'

export function* postTodo(sinceWhen, tilWhen, user2) {
		console.log(sinceWhen)
    const data = yield call(api.post, url, {sinceWhen: sinceWhen, tilWhen:tilWhen, user2:user2})
}

export function* watchPostTodoRequest() {
    while (true) {
	const { text } = yield take(actions.POST_TODO_REQUEST)
	yield call(postTodo, text)
    }
}


export default function* () {
    yield fork(watchPostTodoRequest)
}
