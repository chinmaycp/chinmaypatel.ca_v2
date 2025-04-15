import React, { useEffect } from "react";
import { projectsData } from "../data/projectsData";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUpItem } from "../utils/animations";
import { useInView } from "react-intersection-observer";

const Projects = ({ setActiveSection }) => {
	const { ref, inView } = useInView({
		threshold: 0.4,
		// triggerOnce: false
	});

	useEffect(() => {
		if (inView) {
			setActiveSection("projects");
		}
	}, [inView, setActiveSection]);

	return (
		<section ref={ref} id="projects" className="projects">
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

import PropTypes from "prop-types";
Projects.propTypes = {
	setActiveSection: PropTypes.func.isRequired,
};

export default Projects;
