import { NavLink } from "react-router-dom";

function Button({ link, children }) {
	return <button className='btn'>
        <NavLink to={link}>{children}</NavLink>
    </button>;
}

export default Button;
