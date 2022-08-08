import styles from './Home.module.scss';
import Header from 'common/layouts/Header';

const Home = () => {
	return (
		<div className={styles.bg}>
			<Header />
		</div>
	);
};
export default Home;
