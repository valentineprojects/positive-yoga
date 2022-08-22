import styles from './IconText.module.scss';

interface IconTextProps {
	icon: string;
	alt: string;
	header: string;
	text: string;
}

const IconText = ({ icon, alt, header, text }: IconTextProps) => {
	return (
		<div className={styles.container}>
			<div className={styles.iconContainer}>
				<img className={styles.icon} src={icon} alt={alt} />
			</div>
			<div className={styles.textContainer}>
				<h5>{header}</h5>
				<p>{text}</p>
			</div>
		</div>
	);
};
export default IconText;
