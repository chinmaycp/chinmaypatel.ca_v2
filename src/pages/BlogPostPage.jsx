import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"; // Import remark-gfm
import { loadBlogPost } from "../utils/loadBlogPosts"; // Import single post loader

// Optional: Add syntax highlighting later with react-syntax-highlighter

const BlogPostPage = () => {
	const { slug } = useParams(); // Get slug from URL parameter
	const [post, setPost] = useState(null);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate(); // To navigate back if post not found

	useEffect(() => {
		setLoading(true);
		const foundPost = loadBlogPost(slug);
		if (foundPost) {
			setPost(foundPost);
		} else {
			// Handle post not found (e.g., redirect or show error)
			console.error(`Blog post with slug "${slug}" not found.`);
			// Optionally navigate to a 404 page or back home
			// navigate('/404'); or navigate('/');
		}
		setLoading(false);
	}, [slug, navigate]); // Rerun effect if slug changes

	if (loading) {
		return (
			<div className="container">
				<p>Loading post...</p>
			</div>
		); // Basic loading state
	}

	if (!post) {
		// You might render a specific "Not Found" component here
		return (
			<div className="container blog-post-page">
				<h2>Post Not Found</h2>
				<p>Sorry, the post you are looking for does not exist.</p>
				<Link to="/" className="btn btn--primary">
					Back to Home
				</Link>
			</div>
		);
	}

	return (
		<div className="container blog-post-page">
			{" "}
			{/* Container and specific class */}
			<article>
				<header className="blog-post-page__header">
					<h1>{post.title}</h1>
					<p className="blog-post-page__meta">
						Posted on {new Date(post.date).toLocaleDateString()}
						{post.author && ` by ${post.author}`}
					</p>
				</header>
				<div className="blog-post-page__content">
					<ReactMarkdown remarkPlugins={[remarkGfm]}>
						{post.content}
					</ReactMarkdown>
				</div>
			</article>
			<div className="blog-post-page__back-link">
				<Link to="/#blog" className="btn btn--secondary">
					{" "}
					&larr; Back to Blog Preview
				</Link>
			</div>
		</div>
	);
};

export default BlogPostPage;
