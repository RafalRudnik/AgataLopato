import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function BlueBgc() {

    const sectionBgc = useRef(null);

	useEffect(function () {
		const background = sectionBgc.current;
		gsap.to(background, {
			duration: 1,
			'--clip': '100%',
			ease: 'none',
			scrollTrigger: {
				trigger: background,
				start: 'top 80%',
			},
		});
	}, []);

	return <div className='homeWork-bg' ref={sectionBgc}></div>;
}

export default BlueBgc;
