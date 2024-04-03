import { useState, useEffect } from 'react';
import { clients } from '../../mockData/clients';
import styles from './multiSelect.module.css';
import Select from 'react-select';
import { defaultValue } from '../../helpers/constants';
import { FormProps } from '../../models/request.model';
import cn from 'classnames';
import { FormComponentProps } from '../../models/request.model';
import { MultiValue } from 'react-select';

const MultiSelectComponent = ({
	setValidatedValues,
	validated,
	isSend,
	setBlurred,
}: FormComponentProps) => {
	const [selectValues, setSelectedValues] = useState<
		{ id: string; label: string; value: string }[]
	>(defaultValue.defaultArray);

	useEffect(() => {
		if (isSend) {
			setSelectedValues(defaultValue.defaultArray);
		}
	}, [isSend]);

	const handleChange = (
		selectedOption: MultiValue<{ id: string; label: string; value: string }>,
	) => {
		setSelectedValues(selectedOption as { id: string; label: string; value: string }[]);

		if (selectedOption.length) {
			setValidatedValues((initValue: FormProps) => {
				return {
					...initValue,
					multiSelectValue: true,
				};
			});
		} else {
			setValidatedValues((initValue: FormProps) => {
				return {
					...initValue,
					multiSelectValue: false,
				};
			});
		}
	};

	const visited = () => {
		setBlurred((initValue: FormProps) => {
			return {
				...initValue,
				multiSelectValue: true,
			};
		});
	};

	return (
		<div className={styles.multi__container}>
			<label className={styles.label} htmlFor="clients">
				Группа клиентов <span>*</span>
			</label>
			<Select
				onBlur={visited}
				id="clients"
				value={selectValues}
				onChange={handleChange}
				isMulti
				options={clients}
				className={cn({
					[styles['valid']]: validated === true,
					[styles['invalid']]: validated === false,
				})}
			/>
		</div>
	);
};

export default MultiSelectComponent;
