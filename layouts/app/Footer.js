import { useUser } from 'contexts';

function Footer() {
	const { user } = useUser();

	return (
		user && (
			<footer>
				footer
			</footer>
		)
	);
}

export default Footer;