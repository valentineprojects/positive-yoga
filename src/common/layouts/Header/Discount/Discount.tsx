import styles from './Discount.module.scss';
import offerIcon from 'assets/mdi_local_offer.svg';
import Countdown, { zeroPad } from 'react-countdown';
import { discountHeader, countdownDuration15MIN } from 'config/config';

interface CountdownProps {
	hours: number;
	minutes: number;
	seconds: number;
	completed: boolean;
}

const Discount = () => {
	const renderer = ({ hours, minutes, seconds, completed }: CountdownProps) => {
		if (completed) {
			return <span className={styles.completed}>Too late...</span>;
		} else {
			return (
				<span>
					{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
				</span>
			);
		}
	};
	return (
		<div className={styles.sticky}>
			<div className={styles.container}>
				<img className={styles.icon} src={offerIcon} alt='logo' />
				<span>{discountHeader}</span>
				<span className={styles.countdown}>
					<Countdown date={Date.now() + countdownDuration15MIN} renderer={renderer}></Countdown>
				</span>
			</div>
		</div>
	);
};
export default Discount;
