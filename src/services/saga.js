import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {create} from '../reducers/crudReducers'

function* setUser({ action, payload }) {
    try {
        console.log("setUser",action, payload)
        // const user = yield call(Api.fetchUser, action.payload.userId)
        yield put({ type: 'USER_GET_INFO', payload: payload })
    } catch (e) {
        // yield put({ type: 'USER_FETCH_FAILED', message: e.message })
    }
}

function* setUserSaga() {
    yield takeEvery('USER_FETCH_REQUESTED', setUser)
}

function* getUser({ action, payload }) {
    try {
        console.log("getUser",action, payload)

        // const user = yield call(Api.fetchUser, action.payload.userId)
        yield put(create(payload))
    } catch (e) {
        // yield put({ type: 'USER_FETCH_FAILED', message: e.message })
    }
}

function* getUserSaga() {
    yield takeEvery('USER_GET_INFO', getUser)
}

export default function* rootSaga() {
    yield all([
        setUserSaga(),
        getUserSaga()
    ])
}
