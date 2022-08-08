import { HTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
}

const Button = ({ children, ...props }: ButtonProps) => {
	return <button className={styles.btn}>{children}</button>;
};
export default Button;
