function BurgerBtn({ burgerOpen, handleBurger }) {
	return (
		<div className='nav__burger'>
			<div
				className={`nav__burger-inside ${burgerOpen ? 'burgerActive' : ''}`}
				onClick={handleBurger}></div>
		</div>
	);
}

export default BurgerBtn;
