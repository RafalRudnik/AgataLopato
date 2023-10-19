import Header from '../components/Header';
import Baner from '../components/Banner';
import HomeAbout from '../components/HomeAbout';
import HomeWork from '../components/homeWork';
import HomeSlider from '../components/HomeSlider';
import Footer from '../components/Footer';

function Homepage({ burgerOpen }) {
	return (
		<main className='main'>
			<Header />
			<Baner />
			<HomeAbout />
			<HomeWork />
			<HomeSlider />
			<Footer burgerOpen={burgerOpen} />
		</main>
	);
}

export default Homepage;
