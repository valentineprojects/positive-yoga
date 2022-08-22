import styles from './Home.module.scss';
import Header from 'common/layouts/Header';
import Checkout from 'common/layouts/Checkout';

const Home = () => {
	return (
		<div className={styles.bg}>
			<Header />
			<Checkout />
		</div>
	);
};
export default Home;
