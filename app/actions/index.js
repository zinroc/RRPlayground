import * as types from './types';
import data from '../test_data/data';

export const Currencies = data.rates;

let nextTodoId = 0;

export const addTodo = (text) => {
	return {
		type: types.ADD_TODO,
		id: nextTodoId++,
		text
	};
};

export const setToAmount = (amount) => {
	return {
		type: types.SET_TO_AMOUNT,
		amount
	};
};

export const setFromAmount = (amount) => {
	return {
		type: types.SET_FROM_AMOUNT,
		amount
	};
};

export const toggleTodo = (id) => {
	return {
		type: types.TOGGLE_TODO,
		id
	};
};

export const setVisibilityFilter = (filter) => {
	return {
		type: types.SET_VISIBILITY_FILTER,
		filter
	};
};

export const setCurrency = (list, entry) => {
	let type;
	if (list === 0) {
		type = types.UPDATE_CURRENCY_FROM;
	} else if (list === 1) {
		type = types.UPDATE_CURRENCY_TO;
	}

	return {
		type: type,
		entry
	};
};

export function filterTable(filter) {
    return {
        type: types.FILTER,
        filter
    };
}

