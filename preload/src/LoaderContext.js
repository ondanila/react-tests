import {createContext} from 'react';

export class LoaderStore  {
    _callbacks = [];
    _state = {};
    subscribe(callback) {
        this._callbacks.push(callback);
    }
    _notifyChanges(state) {
        this._callbacks.forEach((callback) => {
            callback(state);
        });
    }
    setState(state) {
        this._state = state;
        this._notifyChanges(state);
    }
    getState() {
        return this._state;
    }
}

export const LoaderContext = createContext();
