import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';

import Homepage from './pages/Homepage';
import About from './pages/About';
import Offer from './pages/Offer';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import MenuMobile from './components/MenuMobile';

function App() {
	const [mobileNav, setMobileNav] = useState(false);
	const [burgerOpen, setBurgerOpen] = useState(false);

	function handleBurger() {
		setBurgerOpen((burgerOpen) => !burgerOpen);
		handleMobileNav();
	}

	function handleMobileNav() {
		setMobileNav((mobileNav) => !mobileNav);
	}

	useEffect(function () {
		const lenis = new Lenis();

		lenis.on('scroll', (e) => {
			console.log(e);
		});

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
	}, []);

	return (
		<div className='App'>
			<Navbar
				handleBurger={handleBurger}
				burgerOpen={burgerOpen}
				setBurgerOpen={setBurgerOpen}
				setMobileNav={setMobileNav}
			/>
			<MenuMobile mobileNav={mobileNav} handleBurger={handleBurger} />
			<Routes>
				<Route path='/' element={<Homepage burgerOpen={burgerOpen} />} />
				<Route path='about' element={<About burgerOpen={burgerOpen}/>} />
				<Route path='offer' element={<Offer burgerOpen={burgerOpen}/>} />
				<Route path='contact' element={<Contact burgerOpen={burgerOpen}/>} />
				<Route path='*' element={<PageNotFound />} />
			</Routes>
			<ScrollToTop />
		</div>
	);
}

export default App;
