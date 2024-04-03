import ListElement from '../listElement/ListElement';
import styles from './namesList.module.css';

type NamesListProps = {
	items: { value: string }[];
	onClick: (e: React.MouseEvent<HTMLLIElement>) => void;
};

const NamesList = ({ items, onClick }: NamesListProps) => {
	return (
		<ul className={styles.list}>
			{items.map((item, index) => (
				<ListElement key={index} value={item.value} onClick={onClick} />
			))}
		</ul>
	);
};

export default NamesList;
