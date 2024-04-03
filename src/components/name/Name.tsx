import styles from './name.module.css';
import { useEffect, useState } from 'react';
import postRequest from '../../network/postRequest';
import { API, defaultValue } from '../../helpers/constants';
import NamesList from '../namesList/NamesList';
import TextError from '../textError/TextError';
import cn from 'classnames';
import { FormComponentProps } from '../../models/request.model';
import { FormProps } from '../../models/request.model';

const Name = ({ setValidatedValues, validated, setBlurred, isSend }: FormComponentProps) => {
	const [nameValue, setNameValue] = useState<string>(defaultValue.defaultString);
	const [suggestions, setSuggestions] = useState<{ value: string }[]>([]);
	const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
	const [nameError, setNameError] = useState<string>(defaultValue.defaultString);

	const request = async (url: string, name: string) => {
		const res = await postRequest(name, url);
		if (res) {
			const { suggestions } = res;
			setSuggestions(suggestions);
		}
	};

	useEffect(() => {
		if (nameValue !== null) {
			request(API.LINK, nameValue);
		}
	}, [nameValue]);

	useEffect(() => {
		if (isSend) {
			setNameValue(defaultValue.defaultString);
		}
	}, [isSend]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNameValue(e.target.value);
		validate(e.target.value);
	};

	const listItemClick = (e: React.MouseEvent<HTMLLIElement>) => {
		const choosenName = e.currentTarget.textContent;
		if (choosenName) {
			setNameValue(choosenName);
			setShowSuggestions(false);
		}
	};

	const validate = (value: string) => {
		const regex = /^[а-яА-Яa-zA-Z\s]{3,255}$/;
		if (regex.test(value)) {
			setNameError(defaultValue.defaultString);
			setValidatedValues((initValue: FormProps) => {
				return {
					...initValue,
					nameValue: true,
				};
			});
		} else {
			setNameError('Введите верное имя');
			setValidatedValues((initValue: FormProps) => {
				return {
					...initValue,
					nameValue: false,
				};
			});
		}
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter' || e.key === 'Click') {
			setShowSuggestions(false);
		}
	};

	const inputClick = () => {
		setShowSuggestions(true);
	};

	const visited = () => {
		if (nameValue) {
			setBlurred((initValue: FormProps) => {
				return {
					...initValue,
					nameValue: true,
				};
			});
		}
		return;
	};

	return (
		<div className={styles.name__container}>
			<label htmlFor="name">
				ФИО <span>*</span>
			</label>
			<input
				onBlur={visited}
				value={nameValue}
				onClick={inputClick}
				onChange={handleChange}
				id="name"
				placeholder="Введите ваше имя"
				type="text"
				onKeyDown={handleKeyDown}
				className={cn({
					[styles['valid']]: validated === true,
					[styles['invalid']]: validated === false,
				})}
			/>
			{nameError && <TextError text={nameError} />}
			{showSuggestions && nameValue && suggestions.length > 0 && (
				<NamesList items={suggestions} onClick={listItemClick} />
			)}
		</div>
	);
};

export default Name;
