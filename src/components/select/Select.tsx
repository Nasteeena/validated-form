import { useState, useEffect } from 'react';
import { doctors } from '../../mockData/doctors';
import Select from 'react-select';
import styles from './select.module.css';
import { SingleValue } from 'react-select';

const SelectComponent = ({ isSend }: { isSend: boolean }) => {
	const [selectValues, setSelectedValues] = useState<SingleValue<{
		id: string;
		label: string;
		value: string;
	}> | null>(null);

	const handleChange = (option: SingleValue<{ id: string; label: string; value: string }>) => {
		console.log(option);
		setSelectedValues(option);
	};

	useEffect(() => {
		if (isSend) {
			setSelectedValues(null);
		}
	}, [isSend]);

	return (
		<div className={styles.select__container}>
			<label className={styles.label} htmlFor="doctors">
				Лечащий врач
			</label>
			<Select id="doctors" value={selectValues} onChange={handleChange} options={doctors} />
		</div>
	);
};

export default SelectComponent;
