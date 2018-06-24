import firebase from 'react-native-firebase';

import { AUTH_START, AUTH_SUCCESS, AUTH_FAILURE } from './constants';

const authStart = () => ({
    type: AUTH_START,
});

const authSuccess = payload => ({
    type: AUTH_SUCCESS,
    payload,
});

const authFailure = payload => ({
    type: AUTH_FAILURE,
    payload,
});

const login = ({ email, password }) => async dispatch => {
    dispatch(authStart());
    try {
        const { user } = await firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password);
        dispatch(
            authSuccess({
                uid: user.uid,
                ...user._user,
            })
        );
    } catch (e) {
        dispatch(authFailure(e.mesage));
    }
};

const register = ({ email, password }) => async dispatch => {
    dispatch(authStart());
    try {
        const { user } = await firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password);
        await firebase
            .database()
            .ref(`profiles/${user.uid}`)
            .set({
                email,
            });
        dispatch(
            authSuccess({
                uid: user.uid,
                ...user._user,
            })
        );
    } catch (e) {
        dispatch(authFailure(e.mesage));
    }
};

export { login, register };
