import { connect } from 'react-redux';
import CurrencyDashboard from '../components/CurrencyDashboard';

const mapStateToProps = (state) => {
	const currencyFrom = state.selectedCurrencies.from;
	const currencyTo = state.selectedCurrencies.to;
	const toAmount = state.moneyAmount.to;
	const fromAmount = state.moneyAmount.from;

	return {
		currencyFrom: currencyFrom,
		currencyTo: currencyTo,
		toAmount: toAmount,
		fromAmount: fromAmount
	};
};

const CurrencyComparer = connect(
	mapStateToProps
)(CurrencyDashboard);

export default CurrencyComparer;
