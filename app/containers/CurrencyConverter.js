import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { setToAmount } from '../actions';

const conversion = (fromAmount, fromWorth, toWorth) => {
	return parseInt( fromAmount * (fromWorth / toWorth) * 100, 10) / 100;
};

let CurrencyConverter = ({ dispatch, toAmount, fromAmount, toWorth, fromWorth}) => {
	// let input = '';

	return (
		<div>
			<form onSubmit = {
				e => {
					e.preventDefault();
					if (fromAmount && toWorth && fromWorth) {
						dispatch(setToAmount(conversion(fromAmount, toWorth, fromWorth)));
					} else {
						return;
					}
				}
			}>
				<button type="submit">
					Convert
				</button>
			</form>
			<div>
				{ toAmount }
			</div>

		</div>
	);
};

CurrencyConverter.propTypes = {
    dispatch: PropTypes.func,
	toAmount: PropTypes.number,
	fromAmount: PropTypes.number,
	toWorth: PropTypes.number,
	fromWorth: PropTypes.number,
};

CurrencyConverter = connect()(CurrencyConverter);

export default CurrencyConverter;


