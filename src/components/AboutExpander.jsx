import { useState } from 'react';

function AboutExpander({ children, buttonColor }) {
	const collapsedNumberWorlds = 20;
	const [expanded, setExpanded] = useState(false);

	function handleExpand() {
		setExpanded((expanded) => !expanded);
	}

	const text = expanded
		? children
		: children.split(' ').slice(0, collapsedNumberWorlds).join(' ') + '...';

	return (
		<div className='aboutWork--expander'>
			<span>{text}</span>
			<button style={{ color: buttonColor }} onClick={handleExpand}>
				{expanded ? 'Pokaż mniej' : ' Pokaż więcej'}
			</button>
		</div>
	);
}

export default AboutExpander;
