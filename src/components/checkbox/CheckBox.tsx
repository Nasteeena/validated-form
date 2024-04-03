import styles from './checkbox.module.css';

const CheckBox = () => {
	return (
		<div className={styles.checkbox__container}>
			<label className={styles.label} htmlFor="notify">
				Не отправлять СМС
			</label>
			<input className={styles.checkbox_input} id="notify" type="checkbox"></input>
		</div>
	);
};

export default CheckBox;
