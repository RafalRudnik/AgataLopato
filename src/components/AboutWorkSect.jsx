import AboutExpander from './AboutExpander';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function AboutWorkSect() {
	const data = useRef(null);

	useEffect(function () {
		const dataTxt = data.current;
		gsap.fromTo(
			dataTxt.children,
			{
				y: '+=30',
			},
			{
				y: 0,
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
		<div className='aboutWork' ref={data}>
			<h3>Brałam udział</h3>
			<AboutExpander>
				w licznych warsztatach, szkoleniach i seminariach dotyczących rozwoju
				dzieci i młodzieży. Między innymi ukończyłam Studium terapii dzieci i
				młodzieży w Dolnośląskim Centrum Psychoterapii, kurs kwalifikujący do
				diagnozy spektrum autyzmu ADOS- 2. Jednak tym, co najbardziej pokazuje
				profesjonalizm i skuteczność moich oddziaływań, są opinie i zadowolenie
				klientów.
			</AboutExpander>
			<h3>Pracuję</h3>
			<AboutExpander>
				w Instytucie Psychologii Uniwersytetu Zielonogórskiego, gdzie prowadzę
				zajęcia ze studentami w zakresie Diagnozy psychologicznej dziecka czy
				Psychologii rozwoju. Dodatkowo jestem koordynatorem dziennego oddziału
				psychiatryczno-rehabilitacyjnego dla dzieci, który funkcjonuje przy
				Ośrodku Profilaktyki i Pomocy Psychiatrycznej Relacja. Największą
				przyjemność sprawia mi praca w gabinecie, gdzie mam styczność z dziećmi,
				młodzieżą i ich rodzinami, którzy borykają się z różnego rodzaju
				trudnościami i zaburzeniami. Prowadzę z nimi diagnozę, terapię, zajęcia
				psychoedukacyjne czy warsztatowe.
			</AboutExpander>
			<div className='aboutWork-img'>
				<img src='./img/circle.png' alt='background'></img>
			</div>
		</div>
	);
}

export default AboutWorkSect;
