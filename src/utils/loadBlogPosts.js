import matter from "gray-matter";

// Use Vite's import.meta.glob to find all .md files in the blog directory
// '?raw' imports the raw file content as a string
// 'eager: true' imports modules synchronously (easier here, can be async)
const postModules = import.meta.glob("../blog/*.md", {
	query: "?raw",
	import: "default",
	eager: true,
});

export function loadBlogPosts() {
	const posts = Object.entries(postModules)
		.map(([filepath, rawContent]) => {
			const { data, content } = matter(rawContent); // Parse frontmatter and content

			// Validate required frontmatter fields
			if (!data.title || !data.date || !data.slug) {
				console.warn(
					`Markdown file ${filepath} is missing required frontmatter (title, date, slug)`
				);
				return null; // Skip posts with missing essential data
			}

			return {
				...data, // Spread frontmatter properties (title, date, slug, excerpt, etc.)
				content, // The actual Markdown content
			};
		})
		.filter((post) => post !== null); // Filter out any null entries from validation

	// Sort posts by date, newest first
	posts.sort((a, b) => new Date(b.date) - new Date(a.date));

	return posts;
}

// Optional: Function to get a single post by slug
export function loadBlogPost(slug) {
	const posts = loadBlogPosts(); // Load all posts (can be optimized later if needed)
	return posts.find((post) => post.slug === slug);
}
