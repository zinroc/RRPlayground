import React from 'react';
import CurrencyComparer from '../containers/CurrencyComparer';


const CurrencyApp = () => (
	<div>
		<div>
			<CurrencyComparer/>
		</div>
	</div>
);


CurrencyApp.propTypes = {
	// currencyInfo: PropTypes.object.isRequired,
	// onTodoClick: PropTypes.func.isRequired
};


export default CurrencyApp;
