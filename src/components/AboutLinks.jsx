const interviewLinks = [
	{
		link: 'https://zdrowie.interia.pl/psychologia/news-psycholog-agata-lopato-styl-wychowawczy-moze-wplynac-na-rozw,nId,5846013',
		desc: 'Wywiad u Małgorzaty Janik na temat depresji u najmłodszych, jakie kroki podejmować, jak leczyć...',
		title: 'Interia - zdrowie “Styl wychowawczy a drepresja',
	},
	{
		link: 'https://zachod.pl/771828/co-jak-i-dlaczego-23-12-2022/',
		desc: 'Wywiad u Karoliny Kamińskiej na temat stresu związanego ze spotkaniami rodzinnymi, oczekiwaniami...',
		title: 'Radio Zachód - “Co jak i dlaczego"',
	},
	{
		link: 'https://powiat-nowosolski.pl/rozne-oblicza-depresji/',
		desc: 'Powiatowa konferencja na temat różnego oblicza depresji której nie możńa lekceważyć...',
		title: 'Powiat nowosolski - “Różne oblicza depresji"',
	},
	{
		link: 'https://zachod.pl/396023/czy-dzieci-maja-jeszcze-prawo-nudzic-sie-po-szkole/',
		desc: 'Szkoła, zajęcia pozalekcyjne, korepetycje i nauka języka obcego. Tak wygląda plan przeciętnego ucznia. Jak uchronić dziecko przed zmęczeniem?...',
		title: 'Radio Zachód - “Czy dzieci mają jeszcze prawo...”',
	},
];

function AboutLinks() {
	return (
		<div className='aboutLinks'>
			{interviewLinks.map((link, index) => (
				<LinkItem link={link} key={index} />
			))}
		</div>
	);
}

export default AboutLinks;

function LinkItem({ link }) {
	return (
		<div className='aboutLink'>
			<div className='aboutLink-container'>
				<a href={link.link} target='_blank' rel='noreferrer'>
					{link.title}
				</a>
				<div className='aboutLink-container aboutLink-container--hidden'>
					<p>{link.desc}</p>
				</div>
			</div>
		</div>
	);
}
