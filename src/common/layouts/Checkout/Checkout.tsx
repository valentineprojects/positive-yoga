import styles from './Checkout.module.scss';
import Box from 'common/components/Box';
// import Button from 'common/components/Button';
import IconText from 'common/components/IconText';
import { IconTextText } from 'config/config';

const Checkout = () => {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<div className={styles.boxContainer}>
					<h3>
						Choose your plan and get <span className='text-accent-color'> 7 days free trial</span>{' '}
					</h3>
					<Box />
					<button className='btn btn-text'>Get your plan</button>
				</div>

				<div>
					<h3>What's in my program?</h3>
					<>
						{IconTextText.map((item) => {
							return <IconText key={item.id} icon={item.src} header={item.h5} text={item.p} alt={item.alt} />;
						})}
					</>
				</div>
			</div>
		</section>
	);
};
export default Checkout;
