import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from './Button';
import BlueBgc from './BlueBgc';

gsap.registerPlugin(ScrollTrigger);

const problemExample = [
	{
		title: 'Odrzucenie',
		desc: 'U dzieci w wieku szkolnym',
	},
	{
		title: 'Depresja',
		desc: 'Choroba cywilizacyjna XXI wieku',
	},
	{
		title: 'Stres',
		desc: 'Problemy w pracy i wiązku',
	},
];

function HomeWork() {
	const sectionMain = useRef(null);

	useEffect(function () {
		const main = sectionMain.current;
		gsap.to(main, {
			delay: 0.5,
			opacity: 1,
			duration: 3,
			ease: 'power3',
			scrollTrigger: {
				trigger: main,
				start: 'top 70%',
			},
		});
	}, []);

	return (
		<div className='homeWork'>
			<BlueBgc />
			<div className='homeWork-main' ref={sectionMain}>
				<HomeWorkLeft />
				<HomeWorkMiddle />
				<HomeWorkRight />
			</div>
			<HomeWorkBanner />
		</div>
	);
}

export default HomeWork;

function HomeWorkLeft() {
	return (
		<div className='homeWork-main--left'>
			{problemExample.map((item) => (
				<Problem item={item} key={item.title} />
			))}
		</div>
	);
}

function Problem({ item }) {
	return (
		<div>
			<h3>{item.title}</h3>
			<p>{item.desc}</p>
		</div>
	);
}

function HomeWorkMiddle() {
	return (
		<div className='homeWork-main--middle'>
			<img src='./img/smileGirl.png' alt='Gilr smiling'></img>
			<div className='homeWork-main--middle-txt'>
				<p>Uśmiechaj się częściej, uwierz w siebie</p>
			</div>
		</div>
	);
}

function HomeWorkRight() {
	return (
		<div className='homeWork-main--right'>
			<h3>
				To jak się czujesz ma znaczenie i wpływ na Ciebie i Twoich bliskich
			</h3>
			<p>
				Psychologa obowiązuje tajemnica zawodowa – w gabinecie obowiązuje mnie zasada poufności. Psycholog może kierować rozmową, aby lepiej Ciebie zrozumieć, ale to Ty decydujesz, co zrobisz i jakie podejmiesz działania. Wstyd i skrępowanie, odczuwane na 1 sesji są całkowicie naturalnym zjawiskiem.
			</p>
			<div className='homeWork-main--right-btn'>
				<h3>Uzyskaj pomoc</h3>
				<Button link={'/offer'}>
					<i className='ti ti-chevrons-right'></i>
				</Button>
			</div>
		</div>
	);
}

function HomeWorkBanner() {
	const shadow = useRef(null);

	useEffect(function () {
		const txtShadow = shadow.current;
		gsap.fromTo(
			txtShadow,
			{
				scaleX: 1,
			},
			{
				scaleX: 0,
				opacity: 1,
				duration: 0.5,
				ease: 'none',
				scrollTrigger: {
					trigger: txtShadow,
					start: 'top 80%',
					end: 'top 50%',
					scrub: true,
				},
			}
		);
	}, []);

	return (
		<div className='homeWork-banner'>
			<div className='homeWork-banner--shadow' ref={shadow}></div>
			<div className='homeWork-banner--txt'>
				<p>Diagnoza i leczenie</p>
			</div>
		</div>
	);
}
