import React from "react";
import { skillsData } from "../data/skillsData";
import { motion } from "framer-motion";

const sectionFadeIn = {
	hidden: { opacity: 0, y: 40 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut" },
	},
};

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

const Skills = () => {
	return (
		<motion.section
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
					variants={containerVariant}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.1 }}
				>
					{skillsData.map((categoryData, index) => (
						<motion.div
							key={index}
							className="skills__category"
							variants={itemVariant}
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

export default Skills;
