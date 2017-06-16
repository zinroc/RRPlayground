import React, { PropTypes } from 'react';
import { currencyEntry } from '../styles/currency.scss';
// import { currencyList } from '../styles/currency.scss';
const Currency = ({ name, value, selected, onClick }) => (
	<li className = { currencyEntry }
		onClick = {onClick}
		style={{
			border: selected === name ? 'thin solid red' : 'none'
		}}
	>
		{name} : {value}
	</li>
);

Currency.propTypes = {
	onClick: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.number.isRequired,
	selected: PropTypes.string
};

export default Currency;
