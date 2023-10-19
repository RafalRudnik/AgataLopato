import { NavLink } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

const pageLinks = [
	{
		linkTo: '/about',
		linkName: 'O mnie',
	},
	{
		linkTo: '/offer',
		linkName: 'Obszary pomocy',
	},
	{
		linkTo: '/contact',
		linkName: 'Kontakt',
	},
];

function MenuMobile({ mobileNav, handleBurger }) {
	return (
		<ul className={`mobileNav ${mobileNav ? 'full' : ''}`}>
			{pageLinks.map((link) => (
				<MobileLink
					link={link}
					key={link.linkName}
					handleBurger={handleBurger}
				/>
			))}
		</ul>
	);
}

export default MenuMobile;

function MobileLink({ link, handleBurger }) {
	return (
		<li>
			<NavLink
				to={`${link.linkTo}`}
				className='nav__links'
				onClick={handleBurger}>
				{link.linkName}
			</NavLink>
			<ScrollToTop />
		</li>
	);
}
