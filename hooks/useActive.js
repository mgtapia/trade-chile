import { useEffect, useState } from 'react';
import classnames from 'classnames';

function useActive() {
	const [active, setActive] = useState(0);

	const Tab = ({ children, id }) => (
		<li className={classnames({ active: active === id })}
			onClick={() => setActive(id)}>
			{children}
		</li>
	);

	const Panel = ({ children, id }) => (
		active === id && (
			<div>{children}</div>
		)
	);

  return { active, Panel, Tab };
};

export default useActive;