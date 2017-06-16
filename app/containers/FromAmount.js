import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { setFromAmount } from '../actions';

let FromAmount = ({ dispatch }) => {
	let input = 0;

	return (
		<div>
			<input
				type = {'number'}
				ref = {node => {input = node;}}
				onChange = {() => dispatch(setFromAmount(parseInt(input.value * 100, 10) / 100))}
			/>

		</div>
	);
};

FromAmount.propTypes = {
    dispatch: PropTypes.func
};

FromAmount = connect()(FromAmount);

export default FromAmount;


