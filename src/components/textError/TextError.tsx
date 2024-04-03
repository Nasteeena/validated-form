import styles from './textError.module.css';

const TextError = ({ text }: { text: string }) => {
	return <p className={styles.errorText}>{text}</p>;
};

export default TextError;
