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
			try {
				await mongoose.connect(url);
				console.log('Connected to database successfully.');
			} catch (error: any) {
				console.log(error.message);
			}
		},

		disconnect: async () => {
			try {
				await mongoose.disconnect();
				console.log('Disconnected from database.');
			} catch (error: any) {
				console.log(error.message);
			}
		}
	};
}
export const mongooseConnection = createMongooseConnection(DB_HOST);
