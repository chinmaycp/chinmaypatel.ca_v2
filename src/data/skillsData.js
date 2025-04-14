import React from "react";

import {
	FaHtml5,
	FaCss3Alt,
	FaSass,
	FaJsSquare,
	FaReact,
	FaNodeJs,
	FaGitAlt,
	FaDocker,
	FaAws,
	FaPython,
} from "react-icons/fa";
import {
	SiExpress,
	SiMongodb,
	SiPostgresql,
	SiTypescript,
	SiVite,
} from "react-icons/si";

export const skillsData = [
	{
		category: "Languages",
		skills: [
			{ name: "JavaScript (ES6+)", icon: FaJsSquare },
			{ name: "HTML5", icon: FaHtml5 },
			{ name: "CSS3", icon: FaCss3Alt },
			{ name: "Python", icon: FaPython },
			{ name: "TypeScript", icon: SiTypescript },
		],
	},
	{
		category: "Frontend",
		skills: [
			{ name: "React", icon: FaReact },
			{ name: "SASS/SCSS", icon: FaSass },
			{ name: "Redux", icon: null },
			{ name: "Framer Motion", icon: null },
			{ name: "Vite", icon: SiVite },
		],
	},
	{
		category: "Backend",
		skills: [
			{ name: "Node.js", icon: FaNodeJs },
			{ name: "Express.js", icon: SiExpress },
		],
	},
	{
		category: "Databases",
		skills: [
			{ name: "MongoDB", icon: SiMongodb },
			{ name: "PostgreSQL", icon: SiPostgresql },
		],
	},
	{
		category: "Cloud & DevOps",
		skills: [
			{ name: "AWS (S3, EC2, Lambda)", icon: FaAws },
			{ name: "Docker", icon: FaDocker },
			{ name: "Git", icon: FaGitAlt },
			{ name: "CI/CD (GitHub Actions)", icon: null },
		],
	},
	{
		category: "Concepts",
		skills: [
			{ name: "RESTful APIs", icon: null },
			{ name: "Agile Methodologies", icon: null },
			{ name: "Object-Oriented Programming", icon: null },
		],
	},
];
