import project1Image from "../assets/images/projects/project-photo-1.jpg";
import project2Image from "../assets/images/projects/project-photo-2.png";

export const projectsData = [
	{
		id: 1,
		title: "Mementogram",
		imageUrl: project1Image,
		description: "A full-featured social media application.",
		techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
		liveUrl: "https://github.com/chinmaycp/mementogram",
		repoUrl: "https://github.com/chinmaycp/mementogram",
	},
	{
		id: 2,
		title: "NewsMunch",
		imageUrl: project2Image,
		description: "An AI News Recommendation System.",
		techStack: [
			"Python",
			"Flask",
			"MongoDB",
			"GCP",
			"Scikit-learn",
			"TensorFlow",
		],
		liveUrl: "https://github.com/chinmaycp/NewsMunch",
		repoUrl: "https://github.com/chinmaycp/NewsMunch",
	},
];
