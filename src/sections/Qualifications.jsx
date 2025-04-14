import React from "react";
import { FaAws } from "react-icons/fa";
import { motion } from "framer-motion";
import { sectionFadeIn } from "../utils/animations";

const Qualifications = () => {
	return (
		<motion.section
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
								University Name, City, Province
							</p>
							<p className="qualifications__duration">
								Graduated: Month Year (e.g., April 2025)
							</p>
							{/* Optional: Add relevant coursework or honors if concise
              <p className="qualifications__details">Relevant Coursework: Data Structures, Algorithms, Web Development, Cloud Computing</p>
              <p className="qualifications__details">Dean's Honor List (Year)</p>
              */}
						</div>
					</div>
					<div className="qualifications__item">
						<h3 className="qualifications__item-title">
							Certifications
						</h3>
						{/* Entry 1 */}
						<div className="qualifications__entry qualifications__entry--certification">
							<FaAws className="qualifications__icon" />
							<div>
								<h4>AWS Certified Cloud Practitioner</h4>
								<p className="qualifications__institution">
									Amazon Web Services
								</p>
								<p className="qualifications__duration">
									Issued: Month Year
								</p>
								{/* Optional: Add Verification Link if available */}
							</div>
						</div>
						{/* Entry 2 - Add more certifications similarly */}
						<div className="qualifications__entry qualifications__entry--certification">
							<FaAws className="qualifications__icon" />
							<div>
								<h4>AWS Certified Developer - Associate</h4>
								<p className="qualifications__institution">
									Amazon Web Services
								</p>
								<p className="qualifications__duration">
									Issued: Month Year
								</p>
								{/* Optional: Add Verification Link */}
							</div>
						</div>
						{/* Add more certs as needed */}
					</div>
					{/* Optional: Briefly address experience directly */}
					{/*
          <div className="qualifications__item qualifications__item--experience">
             <h3 className="qualifications__item-title">Experience</h3>
             <p>As a recent graduate, I am eager to apply my academic knowledge, project experience, and passion for software engineering in a professional setting. My portfolio showcases practical applications of my skills.</p>
          </div>
          */}
				</div>
			</div>
		</motion.section>
	);
};

export default Qualifications;
