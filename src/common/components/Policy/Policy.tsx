import safeCheckout from 'assets/safe-checkout.svg';
import styles from 'Policy.module.scss';

const Policy = () => {
	return (
		<div className='text-container'>
			<div className='text-container'>
				<p className='policy-text'>
					Your free trial will automatically become a paid subscription on the 8th day after you begin your trial. To
					cancel your subscription, please contact us at least 24 hours before the end of the trial period.
				</p>
			</div>
			<div className='text-container'>
				<p className='privacy-text'>
					By choosing a payment method you agree to the <a href='0'>T&Cs</a> and <a href='0'>Privacy Policy</a>
				</p>
			</div>
			<div className='safe-checkout-container'>
				<img className='safe-checkout' src={safeCheckout} alt='safe checkout' />
			</div>
		</div>
	);
};
export default Policy;
