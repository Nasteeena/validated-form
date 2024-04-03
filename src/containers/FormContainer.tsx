import styles from './formContainer.module.css';
import Name from '../components/name/Name';
import Birth from '../components/birth/Birth';
import Number from '../components/number/Number';
import Gender from '../components/gender/Gender';
import MultiSelectComponent from '../components/multiSelect/MultiSelect';
import SelectComponent from '../components/select/Select';
import Button from '../components/button/Button';
import { useState } from 'react';
import ModalSuccess from '../components/modalSuccess/ModalSuccess';
import { FormProps } from '../models/request.model';
import CheckBox from '../components/checkbox/CheckBox';

const FormContainer = () => {
	const [validatedValues, setValidatedValues] = useState<FormProps>({
		nameValue: true,
		phoneValue: true,
		dateValue: true,
		multiSelectValue: true,
	});
	const [blurred, setBlurred] = useState<FormProps>({
		nameValue: false,
		phoneValue: false,
		dateValue: false,
		multiSelectValue: false,
	});
	const [isSend, setIsSend] = useState<boolean>(false);

	const setIsOpen = () => {
		setIsSend(!isSend);
	};

	const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!blurred.phoneValue) {
			setValidatedValues((initValue) => {
				return {
					...initValue,
					phoneValue: false,
				};
			});
		}

		if (!blurred.dateValue) {
			setValidatedValues((initValue) => {
				return {
					...initValue,
					dateValue: false,
				};
			});
		}

		if (!blurred.nameValue) {
			setValidatedValues((initValue) => {
				return {
					...initValue,
					nameValue: false,
				};
			});
		}

		if (!blurred.multiSelectValue) {
			setValidatedValues((initValue) => {
				return {
					...initValue,
					multiSelectValue: false,
				};
			});
		}

		if (
			validatedValues.dateValue &&
			validatedValues.nameValue &&
			validatedValues.phoneValue &&
			validatedValues.multiSelectValue &&
			blurred.dateValue &&
			blurred.nameValue &&
			blurred.phoneValue &&
			blurred.multiSelectValue
		) {
			setIsSend(true);
			setBlurred(() => {
				return {
					multiSelectValue: false,
					nameValue: false,
					dateValue: false,
					phoneValue: false,
				};
			});
		}
	};

	console.log(blurred, 'blurred');
	console.log(validatedValues, 'valid');

	return (
		<div className={styles.container}>
			<header>
				<h1 className={styles.form_header}>Анкета клиента</h1>
			</header>
			<form onSubmit={handleForm} className={styles.form} id="form">
				<Name
					setBlurred={setBlurred}
					setValidatedValues={setValidatedValues}
					validated={validatedValues.nameValue}
					isSend={isSend}
				/>
				<Birth
					setBlurred={setBlurred}
					setValidatedValues={setValidatedValues}
					validated={validatedValues.dateValue}
					isSend={isSend}
				/>
				<Number
					setBlurred={setBlurred}
					setValidatedValues={setValidatedValues}
					validated={validatedValues.phoneValue}
					isSend={isSend}
				/>
				<Gender />
				<MultiSelectComponent
					setValidatedValues={setValidatedValues}
					validated={validatedValues.multiSelectValue}
					isSend={isSend}
					setBlurred={setBlurred}
				/>
				<SelectComponent isSend={isSend} />
				<CheckBox />
				<Button title="Отправить" />
			</form>
			<ModalSuccess message="Клиент создан" isOpen={isSend} setIsOpen={setIsOpen} />
		</div>
	);
};

export default FormContainer;
