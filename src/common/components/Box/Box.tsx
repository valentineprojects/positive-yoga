import styles from './Box.module.scss';
import checkmarkIconActive from 'assets/checkmark-icon.svg';
import checkmarkIcon from 'assets/circle-grey.svg';
import { useState } from 'react';

const Box = () => {
	const [isActive1, setActive1] = useState(false);

	const toggleClass1 = () => {
		setActive1(!isActive1);
	};

	return (
		<div className={isActive1 === true ? 'box-selected' : 'box'} onClick={toggleClass1}>
			<div className='box-text'>
				<div>
					<h5>
						6 month plan
						<span className='box-text-save'>Save 50%</span>
					</h5>
				</div>
				<div className='box-text-price'>
					<h2>
						$9.99 <span>/ month</span>{' '}
					</h2>
				</div>
				<p className='box-text-payment-plan'>
					<span className='text-cross'>$119.94</span>
					<span className='text-accent-color'>$59.94</span>&nbsp;billed every 6 months
				</p>
			</div>
			<div className='box-icon flex-column'>
				<img
					className='box-icon-icon'
					src={isActive1 === true ? checkmarkIconActive : checkmarkIcon}
					alt='checkmark icon'
				/>
			</div>
		</div>
	);
};
export default Box;
