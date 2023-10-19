import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from './Button';
import OfferTypesItems from './OfferTypesItems';

gsap.registerPlugin(ScrollTrigger);

function OfferTypes() {
	return (
		<div className='offerTypes'>
			<OfferTypesBanner />
			<OfferTypesItems />
			<OfferTypesBtn />
		</div>
	);
}

export default OfferTypes;

function OfferTypesBanner() {
	const data = useRef(null);

	useEffect(function () {
		const dataTxt = data.current;
		gsap.fromTo(
			dataTxt.children,
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
				scrollTrigger: {
					trigger: dataTxt,
					start: 'top 70%',
				},
			}
		);
	}, []);

	return (
		<div className='offerTypes-banner' ref={data}>
			<h2>Oferta</h2>
			<div className='offerTypes-banner--img'>
				<img src='./img/offer.png' alt='helping hand'></img>
			</div>
		</div>
	);
}

function OfferTypesBtn() {
	return (
		<div className='offerTypes-btn'>
			<p>Umów wizytę</p>
			<Button link={'/contact'}>
				<i className='ti ti-chevrons-right'></i>
			</Button>
		</div>
	);
}
