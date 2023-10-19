import BlueBgc from './BlueBgc';
import AboutBlueDesc from './AboutBlueDesc';
import AboutBlueImgs from './AboutBlueImgs';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function AboutBlueSect() {
	const section = useRef(null);

	useEffect(function () {
		const main = section.current;
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
		<div className='aboutBlue'>
			<BlueBgc />
			<div className='aboutBlue-main' ref={section}>
				<AboutBlueDesc />
				<AboutBlueImgs />
			</div>
		</div>
	);
}

export default AboutBlueSect;
