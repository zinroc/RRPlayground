import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as types from '../actions/types';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import currencies from './currencies';
import selectedCurrencies from './selectedCurrencies';
import moneyAmount from './moneyAmount';

const filter = (state = '', action) => {
    switch (action.type) {
        case types.FILTER:
            return action.filter;
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    filter,
    todos,
    visibilityFilter,
    currencies,
    selectedCurrencies,
    moneyAmount,
    routing,
});

export default rootReducer;
