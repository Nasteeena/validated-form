import styles from './number.module.css';
import { useState, useEffect } from 'react';
import { InputMask, InputMaskChangeEvent } from 'primereact/inputmask';
import TextError from '../textError/TextError';
import { defaultValue } from '../../helpers/constants';
import { FormProps } from '../../models/request.model';
import cn from 'classnames';
import { FormComponentProps } from '../../models/request.model';

const Number = ({ setValidatedValues, validated, setBlurred, isSend }: FormComponentProps) => {
	const [numberValue, setNumberValue] = useState<string>(defaultValue.defaultString);
	const [phoneError, setError] = useState(defaultValue.defaultString);

	useEffect(() => {
		if (isSend) {
			setNumberValue(defaultValue.defaultString);
		}
	}, [isSend]);

	const handleChange = (e: InputMaskChangeEvent) => {
		const newValue = e.target.value;
		if (newValue) {
			setNumberValue(newValue);
			validatePhoneNumber(newValue);
		}
	};

	const validatePhoneNumber = (phoneNumber: string) => {
		const regex = /^\+\d\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/;
		if (regex.test(phoneNumber)) {
			setError('');
			setValidatedValues((initValue: FormProps) => {
				return {
					...initValue,
					phoneValue: true,
				};
			});
		} else {
			setError('Введите верный номер');
			setValidatedValues((initValue: FormProps) => {
				return {
					...initValue,
					phoneValue: false,
				};
			});
		}
	};

	const visited = () => {
		if (numberValue) {
			setBlurred((initValue: FormProps) => {
				return {
					...initValue,
					phoneValue: true,
				};
			});
		}
		return;
	};

	return (
		<div className={cn(styles['number__container'])}>
			<label htmlFor="phone">
				Номер телефона <span>*</span>
			</label>
			<InputMask
				onBlur={visited}
				placeholder="+9(999) 999-99-99"
				value={numberValue}
				onChange={handleChange}
				mask="+9(999) 999-99-99"
				className={cn({
					[styles['valid']]: validated === true,
					[styles['invalid']]: validated === false,
				})}
			/>
			{phoneError && <TextError text={phoneError} />}
		</div>
	);
};

export default Number;
