import mongoose from 'mongoose';
import { DB_HOST } from '$env/static/private';

export default function connectToDb() {
	return new Promise((resolve) => {
		resolve(
			mongoose
				.set('strictQuery', false)
				.connect(DB_HOST)
				.then(() => console.log('\nConnected to database.\n'))
				.catch((error: Error) => {
					console.log(`\nUnable to connect to database:\n${error.message}\n`);
				})
		);
	});
}
