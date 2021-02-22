import { call, put, takeEvery, all } from 'redux-saga/effects';

import { getOrganization, getRepositories } from '../services/GithubAPI';
import { FETCH_ORGANIZATION, FETCH_REPOSITORIES, fetchOrganizationSuccess, fetchRepositoriesSuccess } from '../actions';

export function* fetchOrganization({ payload }) {
  const organization = yield call(getOrganization, payload.name);

  yield put(fetchOrganizationSuccess(organization));
}

export function* watchFetchOrganization() {
  yield takeEvery(FETCH_ORGANIZATION, fetchOrganization);
}

export function* fetchRepositories({ payload }) {
  const repositories = yield call(getRepositories, payload.organization);

  yield put(fetchRepositoriesSuccess(repositories));
}

export function* watchFetchRepositories() {
  yield takeEvery(FETCH_REPOSITORIES, fetchRepositories);
}

export default function* rootSaga() {
  yield all([
    watchFetchOrganization(),
    watchFetchRepositories(),
  ]);
}