import mongoose from 'mongoose';
import { DB_HOST } from '$env/static/private';

// I am having a tough time implementing the correct types for this function
// function tryCatch() {}

interface Connection {
	connect: () => Promise<void>;
	disconnect: () => Promise<void>;
}

export function createMongooseConnection(url: string = DB_HOST): Connection {
	return {
		connect: async () => {
			await mongoose.connect(url).catch((e) => {
				console.error(e);
			});
			console.log('Database connected.');
		},

		disconnect: async () => {
			await mongoose.disconnect().catch((e) => {
				console.error(e);
			});
			console.log('Database disconnected.');
		}
	};
}

export const mongooseConnection = createMongooseConnection(DB_HOST);
