import mongoose from 'mongoose';

const blogPostSchema = new mongoose.Schema({
	title: {
		type: String,
		require: [true, 'blog post title is required']
	},

	description: {
		type: String,
		require: [true, 'blog post description is required']
	},

	body: {
		type: String,
		require: [true, 'blog post body is required']
	}
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

export { BlogPost as BlogPostCollection };
