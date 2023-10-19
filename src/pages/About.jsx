import AboutBlueSect from '../components/AboutBlueSect';
import AboutHeader from '../components/AboutHeader';
import AboutLinks from '../components/AboutLinks';
import AboutLinksHead from '../components/AboutLinksHead';
import AboutWorkSect from '../components/AboutWorkSect';
import Footer from '../components/Footer';

function About({burgerOpen}) {
	return (
		<main className='main'>
			<AboutHeader />
			<AboutBlueSect />
			<AboutWorkSect />
			<AboutLinksHead />
			<AboutLinks />
			<Footer burgerOpen={burgerOpen}/>
		</main>
	);
}

export default About;
