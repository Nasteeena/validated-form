import styles from './listElement.module.css';

import { LiHTMLAttributes } from 'react';

const ListElement = ({ value, ...props }: { value: string } & LiHTMLAttributes<HTMLLIElement>) => {
	return (
		<li {...props} className={styles.list_el}>
			{value}
		</li>
	);
};

export default ListElement;
