import React, { useEffect } from "react";
import { FaAws } from "react-icons/fa";
import { motion } from "framer-motion";
import { sectionFadeIn } from "../utils/animations";
import { useInView } from "react-intersection-observer";

const Qualifications = ({ setActiveSection }) => {
	const { ref, inView } = useInView({
		threshold: 0.4,
		// triggerOnce: false
	});

	useEffect(() => {
		if (inView) {
			setActiveSection("qualifications");
		}
	}, [inView, setActiveSection]);

	return (
		<motion.section
			ref={ref}
			id="qualifications"
			className="qualifications"
			variants={sectionFadeIn}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.2 }}
		>
			<div className="container">
				{" "}
				{/* Optional container for centering/max-width */}
				<h2 className="section__title">Qualifications</h2>
				<div className="qualifications__grid">
					{" "}
					{/* Use grid for layout */}
					<div className="qualifications__item">
						<h3 className="qualifications__item-title">
							Education
						</h3>
						<div className="qualifications__entry">
							<h4>B.Sc. Computer Science</h4>
							<p className="qualifications__institution">
								York University, Toronto
							</p>
							<br />
							<p className="qualifications__details">
								<span style={{ fontWeight: "bold" }}>
									Relevant Coursework:
								</span>{" "}
								Advanced Object-Oriented Programming, Data
								Structures, Design & Analysis of Algorithms,
								Programming for Mobile (Android), Software Tools
								(C & Unix), Software Design, Operating Systems,
								Machine Learning, Artificial Intelligence
							</p>
						</div>
					</div>
					<div className="qualifications__item">
						<h3 className="qualifications__item-title">
							Certifications
						</h3>
						<div className="qualifications__entry qualifications__entry--certification">
							<FaAws className="qualifications__icon" />
							<div>
								<h4>AWS Certified Developer - Associate</h4>
								<p className="qualifications__institution">
									Amazon Web Services
								</p>
								<a
									href="https://www.credly.com/badges/e2c2b2a8-e36e-44c4-86bb-8d43d5f79739/public_url"
									target="_blank"
									rel="noopener noreferrer"
								>
									Verify on Credly
								</a>
							</div>
						</div>
						<div className="qualifications__entry qualifications__entry--certification">
							<FaAws className="qualifications__icon" />
							<div>
								<h4>
									AWS Certified Solutions Architect -
									Associate
								</h4>
								<p className="qualifications__institution">
									Amazon Web Services
								</p>
								<a
									href="https://www.credly.com/badges/aa3b404a-97e5-4250-914f-eac42c3d02e3/public_url"
									target="_blank"
									rel="noopener noreferrer"
								>
									Verify on Credly
								</a>
							</div>
						</div>
						<div className="qualifications__entry qualifications__entry--certification">
							<FaAws className="qualifications__icon" />
							<div>
								<h4>AWS Certified Cloud Practitioner</h4>
								<p className="qualifications__institution">
									Amazon Web Services
								</p>
								<a
									href="https://www.credly.com/badges/41c07dcb-5d45-449b-8cdc-ee60f0013c6b/public_url"
									target="_blank"
									rel="noopener noreferrer"
								>
									Verify on Credly
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

import PropTypes from "prop-types";
Qualifications.propTypes = {
	setActiveSection: PropTypes.func.isRequired,
};

export default Qualifications;
