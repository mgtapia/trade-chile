import { Icon, Image, Logo } from 'components';
import { APP } from 'consts';

function Footer({ name }) {
	return (
		<footer>
			<div className="support">
				<span>Proyecto apoyado por:</span>
				<Image alt="logo-corfo" src="logos/corfo.webp" />
			</div>
			<div>
				<Icon 
					href="https://www.facebook.com/Bondup-112592321433943" 
					name="facebook-f" 
					variant="fb" 
				/>
				<Icon 
					href="https://twitter.com/BondUP3"
					name="twitter" 
					variant="fb" 
				/>
				<Icon 
					href="https://www.instagram.com/bondupchile/" 
					name="instagram" 
					variant="fb" 
				/>
				<Icon 
					href="https://www.linkedin.com/company/bondup"
					name="linkedin" 
					variant="fb" 
				/>
				<Icon 
					name="youtube" 
					variant="fb" 
					disabled
				/>
			</div>
			<div>
				<div onClick={() => window.scrollTo(0, 0)}>
					<Logo />
					<span className="logo">{APP.alias}</span>
				</div>
				<ul>
					<li>&copy; {new Date().getFullYear()} {APP.alias}.</li>
					<li>Normas comunitarias</li>
					<li>Política de privacidad</li>
					<li>Condiciones</li>
					<li>Política de cookies</li>
				</ul>
			</div>
    </footer>
	)
}

export default Footer;