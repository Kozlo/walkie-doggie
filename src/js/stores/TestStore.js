// src/js/stores/TestStore.js

import AppDispatcher from '../dispatcher/AppDispatcher';
import TestConstants from '../constants/TestConstants';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

let _success = false;

function setSuccess(success) {
    _success = success;
}

class TestStoreClass extends EventEmitter {

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    getSuccess() {
        return _success;
    }
}

const TestStore = new TestStoreClass();

// Here we register a callback for the dispatcher
// and look for out various actions types so we can
// respond accordingly

TestStore.dispatchToken = AppDispatcher.register(action => {

    switch(action.actionType) {
        case TestConstants.RECEIVE_SUCCESS:
            setSuccess(action.success);
            // We need to call emitChange so the event listener
            // knows that a change has been made
            TestStore.emitChange();
            break;
        case TestConstants.RECEIVE_SUCCESS_ERROR:
            alert(action.message);
            TestStore.emitChange();
            break;
        default:
    }
});

export default TestStore;
