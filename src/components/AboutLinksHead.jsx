import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function AboutLinksHead() {
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
		<div className='aboutLinks-head'>
			<div className='aboutLinks-head--shadow' ref={shadow}></div>
			<h2>Wywiady i publikacje</h2>
		</div>
	);
}

export default AboutLinksHead;
