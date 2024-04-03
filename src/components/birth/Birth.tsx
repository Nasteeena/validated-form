import { useState, useEffect } from 'react';
import styles from './birth.module.css';
import TextError from '../textError/TextError';
import { defaultValue } from '../../helpers/constants';
import { FormProps } from '../../models/request.model';
import cn from 'classnames';
import { FormComponentProps } from '../../models/request.model';

export default function Birth({
	setValidatedValues,
	validated,
	setBlurred,
	isSend,
}: FormComponentProps) {
	const [dateValue, setDateValue] = useState<string>(defaultValue.defaultString);
	const [dateError, setDateError] = useState<string>(defaultValue.defaultString);

	useEffect(() => {
		if (isSend) {
			setDateValue(defaultValue.defaultString);
		}
	}, [isSend]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.value;
		setDateValue(newValue);
		validateDate(newValue);
	};

	const validateDate = (date: string) => {
		if (date === defaultValue.defaultString) {
			setDateError('Поле не должно быть пустым');
			setValidatedValues((initValue: FormProps) => {
				return {
					...initValue,
					dateValue: false,
				};
			});
		} else {
			setDateError(defaultValue.defaultString);
			setValidatedValues((initValue: FormProps) => {
				return {
					...initValue,
					dateValue: true,
				};
			});
		}
	};

	const visited = () => {
		if (dateValue) {
			setBlurred((initValue: FormProps) => {
				return {
					...initValue,
					dateValue: true,
				};
			});
		}
		return;
	};

	return (
		<div className={styles.name__container}>
			<label htmlFor="date">
				Дата рождения <span>*</span>
			</label>
			<input
				className={cn({
					[styles['valid']]: validated === true,
					[styles['invalid']]: validated === false,
				})}
				value={dateValue}
				onChange={handleChange}
				id="date"
				type="date"
				onBlur={visited}
			/>
			{dateError && <TextError text={dateError} />}
		</div>
	);
}
