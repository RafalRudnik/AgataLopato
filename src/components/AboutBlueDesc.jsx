const aboutData = [
	{
		title: 'Na codzień',
		desc: 'zajmuję się diagnozą, psychoterapią dzieci, młodzieży i osób dorosłych. Jestem certyfikowanym terapeutą poznawczo-behawioralnym i w swojej pracy kieruję się zasadami etycznymi Polskiego Towarzystwa Psychologicznego.',
		id: 32131,
	},
	{
		title: 'W swojej pracy',
		desc: 'wykorzystuję metody i testy certyfikowane przez Polskie Towarzystwo Testów Psychologicznych. Za ich pomocą diagnozowane są możliwości intelektualne, temperament, relacje w rodzinie, preferencje i zainteresowania, osobowość, zaburzenia psychiczne i osobowości, itp.',
		id: 321331,
	},
];

function AboutBlueDesc() {
	return (
		<div className='aboutBlue-main--desc'>
			{aboutData.map((item) => (
				<AboutBlueDescItem item={item} key={item.id} />
			))}
		</div>
	);
}

export default AboutBlueDesc;

function AboutBlueDescItem({ item }) {
	return (
		<div>
			<h3>{item.title}</h3>
			<p>{item.desc}</p>
		</div>
	);
}
