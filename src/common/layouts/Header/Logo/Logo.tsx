import styles from './Logo.module.scss';
import logo from 'assets/Logo.svg';

const Logo = () => {
	return (
		<>
			<div className={styles.header}>
				<img className={styles.logo} src={logo} alt='logo' />
			</div>
			<div>
				<p className={styles.orderCount}>
					Over<strong>&nbsp; 52 147 &nbsp;</strong>plans ordered.
				</p>
			</div>
		</>
	);
};
export default Logo;
