function ContactMap() {
	return (
		<div className='contact-main--map'>
			<iframe
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2460.1503178114563!2d15.474332812927992!3d51.93121167953638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4706115138875d73%3A0x820bf0649e77995e!2sFrancuska%2052%2C%2065-943%20Zielona%20G%C3%B3ra!5e0!3m2!1spl!2spl!4v1697019095675!5m2!1spl!2spl'
				width='600'
				height='450'
				style={{ border: 0 }}
				allowfullscreen=''
				loading='lazy'
				referrerPolicy='no-referrer-when-downgrade'></iframe>
		</div>
	);
}

export default ContactMap;
