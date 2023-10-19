import Button from './Button';
import { gsap } from 'gsap';
import { useRef, useEffect } from 'react';

function Header() {
	const headerRef = useRef(null);

	useEffect(function () {
		const headerMain = headerRef.current;
		gsap.fromTo(
			headerMain.children,
			{
				y: '+=30',
				opacity: 0,
			},
			{
				y: 0,
				opacity: 1,
				duration: 0.6,
				stagger: 0.1,
				ease: 'easeInOut',
			}
		);
	}, []);

	return (
		<header className='header' ref={headerRef}>
			<HeaderLeft />
			<HeaderMiddle />
			<HeaderRight />
		</header>
	);
}

export default Header;

function HeaderLeft() {
	return (
		<div className='header__left'>
			<div className='header__left-img'>
				<img src='./img/face.png' alt='face vector'></img>
				<img src='./img/brain.png' alt='brain vector'></img>
			</div>
			<div className='header__left-title'>
				<h1>Psycholog</h1>
				<h2 className='header__left-first'>Psychoterapeuta</h2>
				<h2 className='header__left-last'>Praca z dziećmi</h2>
			</div>
			<div className='header__left-desc'>
				<p>Konsultacje psychologiczne</p>
				<p>Terapia indywidualna</p>
			</div>
			<div className='header__left-btns'>
				<Button link={'/contact'}>
					<i className='ti ti-mail-filled'></i>
				</Button>
				<Button link={'https://www.linkedin.com/in/agata-łopato-5ab79b51/'}>
					<a
						href='https://www.linkedin.com/in/agata-łopato-5ab79b51/'
						rel='noreferrer'
						target='_blank'>
						<i className='ti ti-brand-linkedin'></i>
					</a>
				</Button>
			</div>
		</div>
	);
}

function HeaderMiddle() {
	return (
		<div className='header__middle'>
			<img src='./img/Hero.png' alt='Agata Lopato' />
		</div>
	);
}

function HeaderRight() {
	return (
		<div className='header__right'>
			<div className='header__right-desc'>
				<div className='header__right-desc--txt'>
					<h3>Zdrowie</h3>
					<p>samopoczucie</p>
				</div>
				<div className='header__right-desc--img'>
					<img src='./img/brain2.png' alt='brain with lights' />
				</div>
			</div>
			<div className='header__right-img'>
				<img src='./img/hero2.png' alt='girl staring in window'></img>
				<div className='header__right-img--txt'>
					<p>Nie lekceważ pierwszych objawów - im szybciej sięgniesz po pomoc tym szybciej poprawisz jakość życia</p>
				</div>
			</div>
		</div>
	);
}
