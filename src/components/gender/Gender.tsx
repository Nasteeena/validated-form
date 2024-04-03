import styles from './gender.module.css';

const Gender = () => {
	return (
		<div>
			<div className={styles.radio__container}>
				<h3 className={styles.gender_header}>Пол</h3>
				<div className={styles.gender__content}>
					<div className={styles.gender}>
						<label htmlFor="male">Мужской</label>
						<input checked id="male" type="radio" name="gender" value="male" />
					</div>
					<div className={styles.gender}>
						<label htmlFor="female">Женский</label>
						<input id="female" type="radio" name="gender" value="female" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Gender;
