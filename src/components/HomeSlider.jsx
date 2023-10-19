const sliderData = [
	{
		image: '/img/01.png',
		title: 'Stany lękowe',
		description:
			'Strach sprawia, że trzymamy się w tyle. Przekonuje nas, że nigdy nie spełnimy swoich marzeń, każe milczeć, blokuje nasze działanie.  Psychoterapia poznawczo-behawioralna stosuje szereg metod, które obniżają poziom lęku i pomagają pacjentowi.',
	},
	{
		image: '/img/03.png',
		title: 'Stres',
		description:
			'Wszyscy żyjemy w stresie, ponieważ tempo funkcjonowania jest bardzo wysokie. Odczuwamy go w pracy i w życiu prywatnym. Warto jednak wiedzieć jak poradzić sobie z dystresem, który negatywnie wpływa na nasze zdrowie fizyczne i psychiczne.',
	},
	{
		image: '/img/05.png',
		title: 'Samotność',
		description:
			'Samotność dotyka ludzi bez względu na wiek, pochodzenie, status ekonomiczny, edukacyjny lub społeczny. Jest jedną z elementów i objawów wielu zaburzeń psychicznych. By ją pokonać warto aktywizować się społecznie i behawioralnie.',
	},
	{
		image: '/img/04.png',
		title: 'Depresja',
		description:
			'Jedna z najczęściej występujących chorób psychicznych u dzieci, młodzieży oraz osób dorosłych. Według WHO jest przyczyną samobójstw, absencji w pracy, szkole oraz pogorszenia jakości życia. Psychoterapia poznawczo-behawioralna jest najbardziej rekomendowaną psychoterapią przez NICE.',
	},
	{
		image: '/img/02.png',
		title: 'Gniew',
		description:
			'Gniew  jest naturalną reakcją organizmu, która pojawia się w momencie, gdy któraś z naszych potrzeb jest niezaspokojona, mamy problemy w realizacji zamierzonych celów. Samo odczuwanie złości nie jest niczym nieprawidłowym. Terapeuta  może pomóc w odpowiednim reagowaniu.',
	},
	{
		image: '/img/07.png',
		title: 'Poczucie odrzucenia',
		description:
			'Problemy w związku, separacja, rozwód to jedne z najbardziej stresogennych sytuacji życia człowieka dorosłego oraz dziecka. Razem z psychoterapeutą możesz przejść przez te chwile i ponownie nauczyć się jak cieszyć się życiem.',
	},
	{
		image: '/img/06.png',
		title: 'Problemy z koncentracją',
		description:
			'Przyczyny mogą być różne, wśród nich: stres, przepracowanie i przemęczenie, problemy ze snem, nieregularne odżywianie i niedożywienie, problemy neurologiczne. Trudności ze skupieniem uwagi pojawiają się także, gdy w naszym otoczeniu jest zbyt wiele rozpraszaczy. Zobacz jak można pomóc.',
	},
];

function HomeSlider() {
	return (
		<div className='homeSlider'>
			<div className='homeSlider-slider'>
				{sliderData.map((item) => (
					<Slide item={item} key={item.title} />
				))}
			</div>
			<div className='homeSlider-slider'>
				{sliderData.map((item) => (
					<Slide item={item} key={item.title} />
				))}
			</div>
		</div>
	);
}

export default HomeSlider;

function Slide({ item }) {
	return (
		<div className='homeSlider-card'>
			<div className='homeSlider-card--img'>
				<img src={item.image} alt={item.title}></img>
			</div>
			<div className='homeSlider-card--txt'>
				<h4>{item.title}</h4>
				<p>{item.description}</p>
			</div>
		</div>
	);
}
