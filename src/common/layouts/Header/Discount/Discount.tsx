import styles from './Discount.module.scss';
import offerIcon from 'assets/mdi_local_offer.svg';
import Countdown from 'common/components/Countdown';

const Discount = () => {
	return (
		<div className={styles.sticky}>
			<div className={styles.discount}>
				<img className={styles.iconOffer} src={offerIcon} alt='logo' />
				50% discount only valid for
				<div>
					<Countdown />
				</div>
			</div>
		</div>
	);
};
export default Discount;
