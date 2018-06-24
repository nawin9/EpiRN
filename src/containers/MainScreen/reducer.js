import { FETCH_TASK, FETCH_TASK_SUCCESS, FETCH_TASK_FAILURE } from './constants';

const initialState = {
    isLoading: false,
    tasks: [],
};

function pingReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_TASK:
            return {
                ...state,
                isLoading: true,
            };
        case FETCH_TASK_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case FETCH_TASK_SUCCESS:
            return {
                ...state,
                isLoading: false,
                tasks: [state.tasks, ...action.payload],
            };
        default:
            return state;
    }
}

export default pingReducer;
