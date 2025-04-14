import React from "react";
import { projectsData } from "../data/projectsData";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

// Define animation variants (can be moved to a separate utils/animations.js file)
// Variant for the container (grid) to orchestrate stagger
const containerVariant = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};

// Variant for individual items (cards)
const itemVariant = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: "easeOut",
		},
	},
};

const Projects = () => {
	return (
		<section id="projects" className="projects">
			<div className="container">
				<h2 className="section__title">Projects</h2>
				<motion.div
					className="projects__grid"
					variants={containerVariant}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.1 }}
				>
					{projectsData.map((project) => (
						<motion.div key={project.id} variants={itemVariant}>
							<ProjectCard project={project} />
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default Projects;
