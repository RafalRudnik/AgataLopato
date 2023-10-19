import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BlueBgc from './BlueBgc';

const listLeft = [
	{
		desc: 'zaburzenia emocjonalne (lęki, fobie, depresje dziecięce, moczenia nocne, etc.)',
		id: 1,
	},
	{
		desc: 'zaburzenia zachowania (agresja, niedostosowanie społeczne, kradzieże, etc)',
		id: 2,
	},
	{
		desc: 'deficyty rozwojowe (trudności w koncentracji, problemy z pamięcią, niższy poziom inteligencji, opóźniony rozwój psychomotoryczny, wolniejsze tempo pracy, etc.)',
		id: 3,
	},
	{
		desc: 'całościowe zaburzenia rozwoju (autyzm, zespół Aspergera)',
		id: 4,
	},
	{
		desc: 'inne trudności (ADHD, zaburzenia psychosomatyczne, tiki, dziecko w żałobie, rozwód rodziców, etc.)',
		id: 5,
	},
	{
		desc: 'wspomaganie prawidłowego rozwoju dziecka',
		id: 6,
	},
];

const listRight = [
	{
		desc: 'zaburzenia odżywiania',
		id: 1,
	},
	{
		desc: 'zaburzenia lękowe',
		id: 2,
	},
	{
		desc: 'depresje i wahania nastrojów',
		id: 3,
	},
	{
		desc: 'zaburzenia i problemy osobowościowe',
		id: 4,
	},
	{
		desc: 'trudności osobiste',
		id: 5,
	},
	{
		desc: 'problemy w relacjach',
		id: 6,
	},
	{
		desc: 'doświadczanie silnego napięcia, stresu',
		id: 7,
	},
	{
		desc: 'porady wychowawcze',
		id: 8,
	},
	{
		desc: 'doświadczanie kryzysów',
		id: 9,
	},
];

gsap.registerPlugin(ScrollTrigger);

function OfferBlueSect() {
	return (
		<div className='offer-help'>
			<BlueBgc />
			<OfferHelpMain>
				<ListHeader src='/img/help1.png' title='Dzieci' itemsList={listLeft} />
				<ListHeader
					src='/img/help2.png'
					title='Dorośli i młodzież'
					itemsList={listRight}
				/>
			</OfferHelpMain>
		</div>
	);
}

export default OfferBlueSect;

function OfferHelpMain({ children }) {
	const sectionLists = useRef(null);

	useEffect(function () {
		const main = sectionLists.current;
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
		<div className='offer-help-main' ref={sectionLists}>
			{children}
		</div>
	);
}

function ListHeader({ src, title, itemsList }) {
	return (
		<div className='offer-list'>
			<div className='offer-list-title'>
				<img src={src} alt='person with problems'></img>
				<h3>{title}</h3>
			</div>
			<OfferList itemsList={itemsList} />
		</div>
	);
}

function OfferList({ itemsList }) {
	return (
		<ul>
			{itemsList.map((item) => (
				<Item item={item} key={item.id} />
			))}
		</ul>
	);
}

function Item({ item }) {
	return <li>{item.desc}</li>;
}
