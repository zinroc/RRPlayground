import React, { PropTypes } from 'react';
import { currencyList } from '../styles/currency.scss';
import CurrencyListDisplay from '../containers/CurrencyListDisplay';
import FromAmount from '../containers/FromAmount';
import CurrencyConverter from '../containers/CurrencyConverter';

const CurrencyDashboard = ({ currencyFrom, currencyTo, toAmount, fromAmount }) => (
	<div>
		<div className = { currencyList }>
			<h1> Convert </h1>
			<FromAmount />
			<CurrencyConverter
				toAmount = { toAmount }
				fromAmount = { fromAmount }
				toWorth = { currencyTo.value}
				fromWorth = { currencyFrom.value }
			/>
			<h2> From: </h2>
			<CurrencyListDisplay key = {0} id = {0} selectedCurrency = {currencyFrom}/>
		</div>
		<div className = { currencyList }>
			<h2> To: </h2>
			<CurrencyListDisplay key = {1} id = {1} selectedCurrency = {currencyTo}/>
		</div>
	</div>
);

CurrencyDashboard.propTypes = {
	currencyFrom: PropTypes.object.isRequired,
	currencyTo: PropTypes.object.isRequired,
	toAmount: PropTypes.number,
	fromAmount: PropTypes.number,
};

export default CurrencyDashboard;
