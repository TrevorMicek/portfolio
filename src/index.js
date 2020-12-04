import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './Styles/Global';

import NavBar from './Styles/NavBar/NavBar';

//Main App 
const Site = () => (
	<>
		<GlobalStyles />
		<NavBar />
	</>
)

ReactDOM.render(
	<Site />, 
	document.getElementById('root')
);

//Start Date: 2/16/2020
//End Date: 5/5/2020
//11 weeks from start to finish(sick for 1 week + Reactjs learning curve)

//each individual pages' components === 1,676 lines of code
//Styles add another ~ 473 line of code 
//Total is ~2,150 lines of code
