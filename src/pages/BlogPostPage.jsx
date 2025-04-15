import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { loadBlogPost } from "../utils/loadBlogPosts";

const BlogPostPage = () => {
	const { slug } = useParams();
	const [post, setPost] = useState(null);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		setLoading(true);
		const foundPost = loadBlogPost(slug);
		if (foundPost) {
			setPost(foundPost);
		} else {
			console.error(`Blog post with slug "${slug}" not found.`);
			navigate("/404");
		}
		setLoading(false);
	}, [slug, navigate]);

	if (loading) {
		return (
			<div className="container">
				<p>Loading post...</p>
			</div>
		);
	}

	if (!post) {
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

	const metaDescription =
		post.excerpt ||
		(post.content
			? post.content.substring(0, 160).replace(/\s+/g, " ").trim() + "..."
			: `Read the blog post titled ${post.title}.`);

	return (
		<div className="container blog-post-page">
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
					&larr; Back to Blog Preview
				</Link>
			</div>
		</div>
	);
};

export default BlogPostPage;
