import Discount from './Discount';
import Logo from './Logo';
import styles from './Header.module.scss';

const Header = () => {
	return (
		<div className={styles.sticky}>
			<Discount />
			<Logo />
		</div>
	);
};
export default Header;
