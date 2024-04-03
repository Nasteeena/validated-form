import styles from './modalSuccess.module.css';

const ModalSuccess = ({
	message,
	isOpen,
	setIsOpen,
}: {
	message: string;
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
}) => {
	const closeModal = () => {
		setIsOpen(false);
	};

	return (
		<div>
			{isOpen && (
				<div className={styles.modal}>
					<div className={styles['modal-content']}>
						<span className={styles.close} onClick={closeModal}>
							&times;
						</span>
						<p>{message}</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default ModalSuccess;
