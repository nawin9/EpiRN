import { AUTH_START, AUTH_SUCCESS, AUTH_FAILURE } from './constants';

const initialState = {
    isLoading: false,
    uid: '',
    email: '',
    error: '',
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case AUTH_START:
            return {
                ...state,
                isLoading: true,
            };
        case AUTH_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case AUTH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                uid: action.payload.uid,
                email: action.payload.email,
            };
        default:
            return state;
    }
}
