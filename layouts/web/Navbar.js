import { Button, Icon, Logo } from 'components';
import { useStore } from 'contexts';
import classnames from 'classnames';
import { scrollTo } from 'utils';
import { APP } from 'consts';

function Navbar({ name, tabs }) {
	const { history, scroll: { top } } = useStore();
	const isHome = history.route === '/';

	return (
		<nav id="web-nav" className={classnames({ fixed: top > 0 })}>
			<div onClick={() => isHome ? window.scrollTo(0, 0) : history.push('/')}>
				<Logo id="web-logo" />
				<span className="logo">{APP.alias}</span>
			</div>
			<ul>
				<li onClick={scrollTo}>
					<b>{name}</b>
				</li>
				{isHome && tabs.map(([tab, id], i) => (
					<li key={i} onClick={() => scrollTo(id)}>
						{tab}
					</li>
				))}
			</ul>
			<div>
				<Icon name="person" hidden circle />
				<Button 
					id="G-0000" 
					variant="dark" 
					push="registro">
					Únete a {APP.alias}
				</Button>
			</div>
	  </nav>
	);
}

Navbar.defaultProps = {
	state: { 
		email: '', 
		password: '' 
	},
	tabs: [
		['Propósito', 'how-works'],
		['Servicios', 'services'],
		['Precios', 'pricing'],
		['Comunidad', 'register']
	]
};

export default Navbar;