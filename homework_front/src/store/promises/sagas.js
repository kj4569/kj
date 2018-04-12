import { take, put, call, fork } from 'redux-saga/effects'
import api from 'services/api'
import * as actions from './actions'


const url = 'http://127.0.0.1:8000/promises/'

export function* postPromise(sinceWhen, tilWhen, user2) {
		console.log(text)
    const data = yield call(api.post, url, {done: true, contents: {
      sinceWhen, tilWhen, user2
    }})
}

export function* watchPostPromiseRequest() {
    while (true) {
	const { text } = yield take(actions.POST_TODO_REQUEST)
	yield call(postPromise, text)
    }
}


export default function* () {
    yield fork(watchPostPromiseRequest)
}
