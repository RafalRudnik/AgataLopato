import AboutImgSlider from './AboutImgSlider';

function AboutBlueImgs() {
	return (
		<div className='aboutBlue-main-imgs'>
			<div className='aboutBlue-main-img'>
				<img src='./img/about1.png' alt='Agata at work' />
			</div>
			<AboutImgSlider />
			<div className='aboutBlue-main-img'>
				<img src='./img/about2.png' alt='Agata at work' />
			</div>
		</div>
	);
}

export default AboutBlueImgs;
