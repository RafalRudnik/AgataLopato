const phoneNo = '+48661671589';
const mailAddress = 'lopato.agata@gmail.com';

function ContactData() {
	return (
		<div className='contact-main--data'>
			<h2>Umów</h2>
			<h3>Wizytę</h3>
			<p className='contact-main--data-desc'>
				Wizyty umawiane są telefonicznie lub mailowo
			</p>
			<div className='contact-main--card'>
				<p className='contact-main--data-strong'>Kontakt bezpośredni:</p>
				<p className='contact-main--data-strong'>Agata Łopato</p>
				<p className='contact-main--data-strong'>{phoneNo}</p>
				<p className='contact-main--data-strong'>{mailAddress}</p>
			</div>
			<p className='contact-main--sm'>
				Wysyłając wiadomość, wyrażasz zgodę na przetwarzanie swoich danych osobowych
				na potrzeby udzielenia odpowiedzi.
			</p>
		</div>
	);
}

export default ContactData;
