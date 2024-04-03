import styles from './button.module.css';

const Button = ({ title, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
	return (
		<button className={styles.button} {...props}>
			{title}
		</button>
	);
};

export default Button;
