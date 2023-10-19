import { gsap } from 'gsap';
import { useRef, useEffect } from 'react';
import Button from './Button';

function OfferHeader() {
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
		<div className='offerheader' ref={headerRef}>
			<OfferHeaderLeft />
			<OfferHeaderRight />
		</div>
	);
}

export default OfferHeader;

function OfferHeaderLeft() {
	const pinTitle = useRef(null);

	useEffect(function () {
		if (window.innerWidth > 768) {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: pinTitle.current,
					start: 'top 10%',
					end: 'top -50%',
					scrub: 1,
				},
			});

			tl.to(pinTitle.current, { y: 450, duration: 2 }).to(pinTitle.current, {
				opacity: 0,
				scale: 3,
				duration: 2,
			});
		}
	}, []);

	return (
		<div className='offerheader-left'>
			<div className='offerheader-left--top'>
				<p>Sprawdź w jaki sposób mogę pomóc </p>
				<p>Tobie lub Twojemu dziecku:</p>
			</div>
			<div className='offerheader-left--bottom' ref={pinTitle}>
				<h2>Obszary</h2>
				<h3>
					Pomocy <div className='offerheader-left-dot'></div>
				</h3>
			</div>
		</div>
	);
}

function OfferHeaderRight() {
	return (
		<div className='offerheader-right'>
			<div className='offerheader-right-img'>
				<img src='./img/offerhero.png' alt='hand'></img>
				<div className='offerheader-right-img--desc'>
					<p>
						<strong>
							Jak naprawić siebie samego. Czy mogę stać się lepszą osobą?
						</strong>
					</p>
				</div>
				<div className='offerheader-right-img--btn'>
					<Button>
						<i className='ti ti-chevrons-down'></i>
					</Button>
				</div>
			</div>
			<p>
			Pierwsza wizyta to konsultacje, podczas których omawiany jest problem i planowany rodzaj wsparcia.  Omówione zostają również zasady współpracy, harmonogram spotkań i cele leczenia.
			</p>
		</div>
	);
}
