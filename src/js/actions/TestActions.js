// src/js/actions/TestActions.js

import AppDispatcher from '../dispatcher/AppDispatcher';
import TestConstants from '../constants/TestConstants';
import TestAPI from '../utils/TestAPI';

export default {

    getSuccess: () => {
        TestAPI
            .getSuccess('http://localhost:3000/testAuth')
            .then(success => {
                AppDispatcher.dispatch({
                    actionType: TestConstants.RECEIVE_SUCCESS,
                    success: success.success
                })
            })
            .catch(message => {
                AppDispatcher.dispatch({
                    actionType: TestConstants.RECEIVE_SUCCESS_ERROR,
                    message: message
                })
            })
    }
}
