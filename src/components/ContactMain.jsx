import ContactData from './ContactData';
import ContactMap from './ContactMap';
import { gsap } from 'gsap';
import { useRef, useEffect } from 'react';

function ContactMain() {
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
		<div className='contact-main' ref={headerRef}>
			<ContactData />
			<ContactMap />
		</div>
	);
}

export default ContactMain;
