import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { loadBlogPosts } from "../utils/loadBlogPosts";
import { motion } from "framer-motion";
import { sectionFadeIn } from "../utils/animations";

const Blog = () => {
	const [posts, setPosts] = useState([]);
	const postsToShow = 3;

	useEffect(() => {
		const allPosts = loadBlogPosts();
		setPosts(allPosts.slice(0, postsToShow));
	}, []);

	return (
		<motion.section
			id="blog"
			className="blog-preview"
			variants={sectionFadeIn}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.2 }}
		>
			<div className="container">
				<h2 className="section__title">Recent Blog Posts</h2>
				{posts.length === 0 ? (
					<p>No blog posts yet. Stay tuned!</p>
				) : (
					<div className="blog-preview__list">
						{posts.map((post) => (
							<article
								key={post.slug}
								className="blog-preview__item"
							>
								<h3 className="blog-preview__item-title">
									<Link to={`/blog/${post.slug}`}>
										{post.title}
									</Link>
								</h3>
								<p className="blog-preview__item-meta">
									Posted on{" "}
									{new Date(post.date).toLocaleDateString()}
									{post.author && ` by ${post.author}`}
								</p>
								{post.excerpt && (
									<p className="blog-preview__item-excerpt">
										{post.excerpt}
									</p>
								)}
								<Link
									to={`/blog/${post.slug}`}
									className="btn btn--small btn--outline"
								>
									Read More
								</Link>
							</article>
						))}
					</div>
				)}
				<div className="blog-preview__more-link">
					<Link to="/#" className="btn btn--primary">
						View All Posts
					</Link>
				</div>
			</div>
		</motion.section>
	);
};

export default Blog;
