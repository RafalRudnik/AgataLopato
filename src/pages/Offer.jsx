import Footer from '../components/Footer';
import OfferHeader from '../components/OfferHeader';
import OfferBlueSect from '../components/OfferBlueSect';
import OfferTypes from '../components/OfferTypes';

function Offer({ burgerOpen }) {
	return (
		<main className='main'>
			<OfferHeader />
			<OfferBlueSect />
			<OfferTypes />
			<Footer burgerOpen={burgerOpen} />
		</main>
	);
}

export default Offer;
