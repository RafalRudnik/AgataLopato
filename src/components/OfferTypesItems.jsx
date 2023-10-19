import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const offerData = [
	{
		title: 'Konsultacje psychologiczne',
		desc: 'To pierwszy kontakt klienta w gabinecie. Podczas konsultacji przedstawiony zostaje problem klienta, ma on możliwość poznania specjalisty, przedstawienia swoich trudności, które wpłynęły na decyzję o zgłoszeniu się. To czas, w którym jasno zostaje określony charakter problemu czy dysfunkcji oraz metody pracy nad rozwiązaniem lub zmianą. Konsultacja niekiedy obejmuje więcej niż jedno spotkanie i może być wystarczającą, doraźną formą pomocy. Podczas niej wyjaśniane są rozmaite wątpliwości klienta, uzyskuje on też odpowiedzi na pytania dotyczące psychoterapii, jej zasad, czasu trwania, celu i metod jego osiągnięcia.',
		id: 2142141,
	},
	{
		title: 'Terapia indywidualna dla dzieci, młodzieży i dorosłych',
		desc: 'To cykle spotkań terapeuty z pacjentem w celu polepszenia jego jakości życia i funkcjonowania. Tematyka obejmuje takie problemy, jak zaburzenie zachowania, zaburzenia nastroju, zaburzenia lękowe, zaburzenia odżywiania, wsparcie w sytuacjach kryzysowych, wsparcie rozwoju poznawczego, trudności w relacjach, problemy wychowawcze. Sesje przeważnie odbywają się stacjonarnie a ich ilość zależy od problemy, z którym pacjent zgłasza się do terapeuty. Jedna sesja to czas ok. 50 minut. Kilka pierwszych spotkań ma charakter diagnostyczny, czyli poznanie sytuacji pacjenta, ustalenie sposobu wsparcia i zasad współpracy.',
		id: 4248124,
	},
];

function OfferTypesItems() {
	return (
		<div className='offerTypes-types'>
			{offerData.map((item) => (
				<OfferTypesItem item={item} key={item.id} />
			))}
		</div>
	);
}

export default OfferTypesItems;

function OfferTypesItem({ item }) {
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
		<div className='offerTypes-types' ref={data}>
			<h3>{item.title}</h3>
			<p>{item.desc}</p>
		</div>
	);
}
