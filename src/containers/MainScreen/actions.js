import firebase from 'react-native-firebase';

import { FETCH_TASK, FETCH_TASK_SUCCESS, FETCH_TASK_FAILURE } from './constants';

const fetchingTask = () => ({
    type: FETCH_TASK,
});

const fetchingTaskSuccess = payload => ({
    type: FETCH_TASK_SUCCESS,
    payload,
});

const fetchingTaskFailure = payload => ({
    type: FETCH_TASK_FAILURE,
    payload,
});

const fetchTasks = () => async dispatch => {
    dispatch(fetchingTask());
    try {
        dispatch(
            fetchingTaskSuccess({
                tasks: [],
            })
        );
    } catch (e) {
        dispatch(fetchingTaskFailure(e.mesage));
    }
};

export { fetchTasks };
