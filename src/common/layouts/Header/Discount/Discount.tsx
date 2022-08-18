import styles from './Discount.module.scss';
import offerIcon from 'assets/mdi_local_offer.svg';
import Countdown from 'common/components/Countdown';

const Discount = () => {
	return (
		<div className={styles.sticky}>
			<div className={styles.container}>
				<img className={styles.icon} src={offerIcon} alt='logo' />
				<span>50% discount only valid for</span>
				<span>
					<Countdown />
				</span>
			</div>
		</div>
	);
};
export default Discount;
