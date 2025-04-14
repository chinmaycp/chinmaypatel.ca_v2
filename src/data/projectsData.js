import project1Image from "../assets/images/projects/project-photo-test.jpg";

export const projectsData = [
	{
		id: 1,
		title: "E-Commerce Platform",
		imageUrl: project1Image, // Use the imported image variable
		description:
			"A full-featured online store built with the MERN stack, including product Browse, cart management, user authentication, and order processing.",
		techStack: [
			"React",
			"Node.js",
			"Express",
			"MongoDB",
			"SASS",
			"Redux Toolkit",
			"JWT",
		],
		liveUrl: "https://your-live-demo-link1.com", // Replace with your actual link
		repoUrl: "https://github.com/yourusername/project-repo1", // Replace with your actual link
	},
	{
		id: 2,
		title: "Real-Time Chat Application",
		imageUrl: project1Image, // Use the imported image variable
		description:
			"A web application allowing users to chat in real-time using WebSockets. Features include private messaging, user status indicators, and notifications.",
		techStack: [
			"React",
			"Node.js",
			"Socket.IO",
			"Tailwind CSS",
			"Context API",
		],
		liveUrl: "https://your-live-demo-link2.com", // Replace with your actual link
		repoUrl: "https://github.com/yourusername/project-repo2", // Replace with your actual link
	},
];
