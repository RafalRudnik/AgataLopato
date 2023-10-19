import { NavLink } from 'react-router-dom';

function MenuDesctop({ links }) {
	return (
		<ul className='nav__descMenu'>
			{links.map((link) => (
				<LinkItem link={link} key={link.linkName} />
			))}
		</ul>
	);
}

export default MenuDesctop;

function LinkItem({ link }) {
	return (
		<li>
			<NavLink to={`${link.linkTo}`} className='nav__links'>
				{link.linkName}
			</NavLink>
		</li>
	);
}
