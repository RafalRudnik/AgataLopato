import Logo from './Logo';
import MenuDesctop from './MenuDesctop';
import BurgerBtn from './BurgerBtn';

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

function Navbar({ handleBurger, burgerOpen, setMobileNav, setBurgerOpen }) {
	return (
		<div className='menubox'>
			<nav className='nav'>
				<Logo setMobileNav={setMobileNav} setBurgerOpen={setBurgerOpen} />
				<MenuDesctop links={pageLinks} />
				<BurgerBtn handleBurger={handleBurger} burgerOpen={burgerOpen} />
			</nav>
		</div>
	);
}

export default Navbar;
