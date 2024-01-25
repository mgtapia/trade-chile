import { Icon, Field, Logo } from 'components';
import { useUser } from 'contexts';
import classnames from 'classnames';
import { useHistory } from 'hooks';
import { APP } from 'consts';

function Navbar({ form, users }) {
	const history = useHistory();
	const { user, signOut } = useUser();
	const { tab } = form.values;

	function handleNavegate(tab) {
		form.setValues({ tab, page: 0 });
		window.scrollTo(0, 0);
	}

	return (
		user && user.email && (
			<nav id="app-nav">
				<div>
					<Logo onClick={() => history.push('/')} />
					<div className="search">
						<Icon name="search" /> 
						<Field 
							form={form} 
							name="query" 
							placeholder="Buscar en BondUP" 
							onChange={() => form.setValues({ page: 0 })} 
						/>
					</div>
				</div>
				<ul>
					<li className={classnames({ active: tab === 0 })}
						onClick={(e) => handleNavegate(0, e)}>
						<Icon name="home" />
					</li>
					<li className={classnames({ active: tab === 1 })}
						onClick={(e) => handleNavegate(1, e)}>
						<Icon name="people" />
					</li>
					<li className={classnames({ active: tab === 2 })}
						onClick={(e) => handleNavegate(2, e)}>
						<Icon name="dashboard" />
					</li>
				</ul>
				<div className="nav">
					<Icon 
						name="facebook" 
						open="https://business.facebook.com/" 
						variant="fb" 
						circle 
					/>
					<Icon 
						name="leaderboard" 
						open="https://analytics.google.com/analytics/web/#/p320720935/reports/intelligenthome" 
						circle 
					/>
					<Icon 
						name="local_offer" 
						open="https://tagmanager.google.com/?authuser=3#/container/accounts/6050448909/containers/89453484/workspaces/10" 
						circle 
					/>
					<img src={user?.photoURL} />
				</div>
			</nav>
		)
	);
}

export default Navbar;