import { gsap } from 'gsap';
import SplitType from 'split-type';
import { useRef, useEffect } from 'react';

function AboutHeader() {
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
		<div className='aboutHeader'>
			<div className='aboutHeader-main' ref={headerRef}>
				<AboutHeaderImg />
				<AboutHeaderTxt />
				<AboutHeaderHelp />
			</div>
		</div>
	);
}

export default AboutHeader;

function AboutHeaderImg() {
	return (
		<div className='aboutHeader-main--img'>
			<div className='aboutHeader-main--img-desc'>
				<h2>Nazywam się</h2>
				<h3>Agata Łopato</h3>
			</div>
			<img src='./img/aboutHero.png' alt='Agata Lopato'></img>
		</div>
	);
}

function AboutHeaderTxt() {
	return (
		<div className='aboutHeader-main--txt'>
			<p>
				Jestem psychologiem i certyfikowanym psychoterapeutą
				poznawczo-behawioralnym
			</p>
		</div>
	);
}

function AboutHeaderHelp() {
	const text = useRef(null);

	useEffect(function () {
		const headerTxt = text.current;
		const texts = new SplitType(headerTxt, { types: 'words' });

		if (window.innerWidth > 776) {
			gsap.from(texts.words, {
				scrollTrigger: {
					trigger: headerTxt,
					start: 'top 80%',
					end: 'top 40%',
					scrub: true,
					markers: false,
				},
				y: 140,
				stagger: 0.2,
			});
		} else {
			gsap.from(texts.words, {
				scrollTrigger: {
					trigger: headerTxt,
					start: 'top 70%',
					end: 'top 40%',
					scrub: true,
					markers: false,
				},
				y: 140,
				stagger: 0.2,
			});
		}
	}, []);

	return (
		<div className='aboutHeader-main--help'>
			<h2 ref={text}>
				Jak mogę <span>pomóc?</span>
			</h2>
		</div>
	);
}
