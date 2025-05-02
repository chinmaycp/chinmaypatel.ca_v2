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
	FaJava,
	FaLaravel,
} from "react-icons/fa";
import {
	SiC,
	SiExpress,
	SiFirebase,
	SiGooglecloud,
	SiMongodb,
	SiMysql,
	SiNextdotjs,
	SiPhp,
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
			{ name: "PHP", icon: SiPhp },
			{ name: "Java", icon: FaJava },
			{ name: "C", icon: SiC },
		],
	},
	{
		category: "Frontend & Backend",
		skills: [
			{ name: "React.js", icon: FaReact },
			{ name: "SASS/SCSS", icon: FaSass },
			{ name: "Next.js", icon: SiNextdotjs },
			{ name: "Laravel", icon: FaLaravel },
			{ name: "Node.js", icon: FaNodeJs },
			{ name: "Express.js", icon: SiExpress },
		],
	},
	{
		category: "Databases",
		skills: [
			{ name: "MySQL", icon: SiMysql },
			{ name: "PostgreSQL", icon: SiPostgresql },
			{ name: "MongoDB", icon: SiMongodb },
		],
	},
	{
		category: "Cloud & DevOps",
		skills: [
			{ name: "AWS (S3, EC2, Lambda)", icon: FaAws },
			{ name: "GCP", icon: SiGooglecloud },
			{ name: "Firebase", icon: SiFirebase },
			{ name: "Docker", icon: FaDocker },
			{ name: "Git", icon: FaGitAlt },
		],
	},
];
