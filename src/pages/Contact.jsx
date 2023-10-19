import ContactMain from '../components/ContactMain';
import Footer from '../components/Footer';

function Contact({ burgerOpen }) {
	return (
		<main className='main'>
			<ContactMain />
			<Footer burgerOpen={burgerOpen} />
		</main>
	);
}

export default Contact;
