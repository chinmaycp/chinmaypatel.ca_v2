import React, { useEffect } from "react";
import { skillsData } from "../data/skillsData";
import { motion } from "framer-motion";
import {
	sectionFadeIn,
	fadeInUpItem,
	fastStaggerContainer,
} from "../utils/animations";
import { useInView } from "react-intersection-observer";

const Skills = ({ setActiveSection }) => {
	const { ref, inView } = useInView({
		threshold: 0.4,
		// triggerOnce: false
	});

	useEffect(() => {
		if (inView) {
			setActiveSection("skills");
		}
	}, [inView, setActiveSection]);

	return (
		<motion.section
			ref={ref}
			id="skills"
			className="skills"
			variants={sectionFadeIn}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.2 }}
		>
			<div className="container">
				<h2 className="section__title">Technical Skills</h2>
				<motion.div
					className="skills__categories"
					variants={fastStaggerContainer}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.1 }}
				>
					{skillsData.map((categoryData, index) => (
						<motion.div
							key={index}
							className="skills__category"
							variants={fadeInUpItem}
						>
							<h3 className="skills__category-title">
								{categoryData.category}
							</h3>
							<div className="skills__list">
								{categoryData.skills.map(
									(skill, skillIndex) => (
										<div
											key={skillIndex}
											className="skills__item"
										>
											{skill.icon && (
												<span className="skills__icon">
													<skill.icon />
												</span>
											)}
											<span className="skills__name">
												{skill.name}
											</span>
										</div>
									)
								)}
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</motion.section>
	);
};

import PropTypes from "prop-types";
Skills.propTypes = {
	setActiveSection: PropTypes.func.isRequired,
};

export default Skills;
