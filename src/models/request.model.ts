export interface postRequestProps {
	query: string;
	url: string;
}

export interface FormProps {
	nameValue: boolean;
	phoneValue: boolean;
	dateValue: boolean;
	multiSelectValue: boolean;
}

export interface FormComponentProps {
	validated: boolean;
	isSend: boolean;
	setBlurred: (updateFn: (prevValue: FormProps) => FormProps) => void;
	setValidatedValues: (updateFn: (prevValue: FormProps) => FormProps) => void;
}
