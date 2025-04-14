import React from "react";
import { projectsData } from "../data/projectsData";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUpItem } from "../utils/animations";

const Projects = () => {
	return (
		<section id="projects" className="projects">
			<div className="container">
				<h2 className="section__title">Projects</h2>
				<motion.div
					className="projects__grid"
					variants={staggerContainer}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.1 }}
				>
					{projectsData.map((project) => (
						<motion.div key={project.id} variants={fadeInUpItem}>
							<ProjectCard project={project} />
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default Projects;
