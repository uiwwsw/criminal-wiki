import axios from '$src/utils/axios';
export default async () => {
	await await new Promise(resolve => setTimeout(resolve, 0));
	return [{ a: 1, b: 2 }];
};
