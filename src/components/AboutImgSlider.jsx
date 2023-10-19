import { useState } from 'react';
import { gsap } from 'gsap';
import { useRef, useEffect } from 'react';

const cert = [
	'/img/cert1.png',
	'/img/cert2.png',
	'/img/cert3.png',
	'/img/cert4.png',
	'/img/cert5.png',
	'/img/cert6.png',
	'/img/cert7.png',
];

function AboutImgSlider() {
	const [step, setStep] = useState(1);
	const imgNumber = 7;
	const image = useRef(null);
	const next = useRef(null);
	const prev = useRef(null);

	function handlePrevious() {
		if (step > 1) {
			setStep((step) => step - 1);
		} else {
			setStep(imgNumber);
		}
	}
	function handleNext() {
		if (step < imgNumber) {
			setStep((step) => step + 1);
		} else if (step === imgNumber) {
			setStep(1);
		}
	}

	useEffect(function () {
		const imgSlide = image.current;
		const nextArrow = next.current;

		function imgAnim() {
			gsap.from(imgSlide, {
				opacity: 0,
				scale: 0.7,
				duration: 0.5,
				ease: 'none',
			});
		}

		nextArrow.addEventListener('click', imgAnim);

		return function () {
			nextArrow.removeEventListener('click', imgAnim);
		};
	}, []);

	useEffect(function () {
		const imgSlide = image.current;
		const prevArrow = prev.current;

		function imgAnim() {
			gsap.from(imgSlide, {
				opacity: 0,
				scale: 0.7,
				duration: 0.5,
				ease: 'none',
			});
		}

		prevArrow.addEventListener('click', imgAnim);

		return function () {
			prevArrow.removeEventListener('click', imgAnim);
		};
	}, []);

	return (
		<div className='aboutBlue-slider'>
			<div className='aboutBlue-main-img'>
				<img src={cert[step - 1]} alt='certificate' ref={image}></img>
			</div>
			<div className='aboutBlue-slider-btns'>
				<button onClick={handlePrevious} ref={prev}>
					<i className='ti ti-chevron-left'></i>
				</button>
				<button onClick={handleNext} ref={next}>
					<i className='ti ti-chevron-right'></i>
				</button>
			</div>
		</div>
	);
}

export default AboutImgSlider;
