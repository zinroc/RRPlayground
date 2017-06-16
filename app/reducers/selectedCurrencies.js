import * as types from '../actions/types';

const selectedCurrencies = (state = {from: {name: null, value: null}, to: {name: null, value: null}}, action) => {
	switch (action.type) {
		case types.UPDATE_CURRENCY_FROM:
			return Object.assign({}, state, {
				from: action.entry
			});
		case types.UPDATE_CURRENCY_TO:
			return Object.assign({}, state, {
				to: action.entry
			});
		default:
			return state;
	}
};

export default selectedCurrencies;

