import { Link } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

function Logo({ setBurgerOpen, setMobileNav }) {
	function handleCloseMenu() {
		setBurgerOpen(false);
		setMobileNav(false);
	}

	return (
		<div className='logo'>
			<Link to='/'>
				<img
					src='./img/LogoWhite.png'
					alt='logo'
					onClick={handleCloseMenu}></img>
			</Link>
			<Link to='/' className='logo--link'>
				Agata Łopato
			</Link>
			<ScrollToTop />
		</div>
	);
}

export default Logo;
