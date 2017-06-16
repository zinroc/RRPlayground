import React, { PropTypes } from 'react';
import Currency from './Currency';

const CurrencyList = ({  currencies, selectedCurrency, onClick }) => (
	<ul>
		{currencies.map(currency =>
			<Currency
				key = {currency.id}
				name = { currency.name }
				value = { currency.value }
				selected = { selectedCurrency.name }
				onClick = {() => onClick({name: currency.name, value: currency.value})}
			/>
		)}
	</ul>
);

CurrencyList.propTypes = {
	currencies: PropTypes.array.isRequired,
	selectedCurrency: PropTypes.object.isRequired,
	onClick: PropTypes.func.isRequired
};

export default CurrencyList;
