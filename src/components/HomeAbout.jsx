import Button from './Button';

function HomeAbout() {
	return (
		<div className='container'>
			<div className='homeabout'>
				<HomeAboutDesc />
				<HomeAboutImg />
			</div>
				<HomeAboutTxt />
		</div>
	);
}

export default HomeAbout;

function HomeAboutImg() {
	return (
		<div className='homeabout-img'>
			<div className='homeabout-img-top'>
				<div className='homeabout-img-top--content'>
					<img src='./img/man1.png' alt='Mad man' />
				</div>
				<div className='homeabout-img-top--content'>
					<img src='./img/girl1.png' alt='Sad girl' />
				</div>
			</div>
			<div className='homeabout-img-bottom'>
				<img src='./img/agandboy.png' alt='Agata and boy' />
			</div>
		</div>
	);
}

function HomeAboutDesc() {
	return (
		<div className='homeabout-desc'>
			<h3>Jestem</h3>
			<p>
				psychologiem i certyfikowanym psychoterapeutą poznawczo-behawioralnym
				(certyfikat nr 1444). Ukończyłam studia psychologiczne na Uniwersytecie
				SWPS we Wrocławiu. Dodatkowo podnosiłam swoje kompetencje kończąc studia
				podyplomowe w Szkole Psychoterapii Poznawczo-Beahwioralnej Uniwersytetu
				SWPS pod kierownictwem dr A. Popiel i dr E. Pragłowskiej, na
				Uniwersytecie Wrocławskim na kierunku Logopedia.
			</p>
			<div className='homeabout-desc-btn'>
				<h4>Dowiedz się więcej</h4>
				<Button link={'/about'}>
					<i className='ti ti-chevrons-right'></i>
				</Button>
			</div>
		</div>
	);
}

function HomeAboutTxt() {
	return (
		<p className='homeabout-txt'>
			Jestem członkiem Polskiego Towarzystwa Terapii Poznawczo-Behawioralnej
			oraz The European Association for Behaviorural and Cognitive Therapies.
		</p>
	);
}
