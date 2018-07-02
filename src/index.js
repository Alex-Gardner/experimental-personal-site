import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/footer/footer.js';
import Header from './components/header/header';
import SamplesPortal from './components/samples-portal/samples-portal';
import ArticlesPortal from './components/articles-portal/articles-portal';
import './styles/style.css';

const testArray = [5, 8, 13];
const stageThis = () => testArray.map(item => item + 2);
function justTryin() {
	const stageRight = 'move a tad to the left';
	return stageRight.split(' ');
}
console.log(stageThis());
console.log(justTryin);
console.log(justTryin());

const Page = () => {
	return (
		<div className="grid-holder">
			<Header />
			<ArticlesPortal />
			<SamplesPortal />
			<Footer />
		</div>
	);
};

ReactDOM.render(<Page />, document.getElementById('root'));
