import * as types from '../actions/types';

const moneyAmount = (state = {from: null, to: null}, action) => {
	switch (action.type) {
		case types.SET_FROM_AMOUNT:
			return Object.assign({}, state, {
				from: action.amount
			});
		case types.SET_TO_AMOUNT:
			return Object.assign({}, state, {
				to: action.amount
			});
		default:
			return state;
	}
};

export default moneyAmount;
