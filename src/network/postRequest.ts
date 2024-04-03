import { API } from '../helpers/constants';

const postRequest = async (query: string, url: string) => {
	const options: RequestInit = {
		method: 'POST',
		mode: 'cors',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			Authorization: 'Token ' + API.TOKEN,
		},
		body: JSON.stringify({ query: query }),
	};

	try {
		const response = await fetch(url, options);
		const result = await response.json();
		return result;
	} catch (error) {
		console.log('error', error);
		return null;
	}
};

export default postRequest;
