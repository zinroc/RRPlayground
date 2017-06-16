import { connect } from 'react-redux';
import CurrencyList from '../components/CurrencyList';
import { setCurrency } from '../actions';

const convertCurrenciesToArr = (arr) => {
	const result = [];
	let id = 1;
	Object.keys(arr).map((key) => {
		result.push({id: id, name: key, value: arr[key]});
		id++;
	});
	return result;
};

const mapStateToProps = (state, ownProps) => {
	const currencies = convertCurrenciesToArr(state.currencies);
	return {
		currencies: currencies,
		selectedCurrency: ownProps.selectedCurrency,
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClick: (entry) => {
			dispatch(setCurrency(ownProps.id, entry));
		}
	};
};


const CurrencyListDisplay = connect(
	mapStateToProps,
	mapDispatchToProps
)(CurrencyList);

export default CurrencyListDisplay;
