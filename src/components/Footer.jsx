import Logo from './Logo';

function Footer({ burgerOpen }) {
	return (
		<footer className={`footer ${burgerOpen ? 'hide-footer' : ''}`}>
			<FooterMain />
			<FooterCopy />
		</footer>
	);
}

export default Footer;

function FooterCopy() {
	return (
		<div className='footer-copy'>
			<p>
				{new Date().getFullYear()} <span>&copy;</span> projekt i wykonanie
				<a href='https://bnc-web.com/' rel='noreferrer' target='_blank'>
					BNC Web
				</a>{' '}
				|{' '}
				<a href='https://rafal-rudnik.com/' rel='noreferrer' target='_blank'>
					Rafał Rudnik
				</a>
			</p>
		</div>
	);
}

function FooterMain() {
	return (
		<div className='footer-main'>
			<Logo />
			<div>
				<p>lopato.agata@gmail.com</p>
				<p>Tel. 661671589</p>
				<p>
					Ul. Francuska 52 (Centrum Handlowe Francuska) 1 piętro gabinet nr. 4
				</p>
				<p>65-943 Zielona Góra</p>
			</div>
		</div>
	);
}
