import React, { useEffect } from "react";
import profilePhoto from "../assets/images/profile-photo-1.jpeg";
import { motion } from "framer-motion";
import { initialLoadFadeIn } from "../utils/animations";
import { useInView } from "react-intersection-observer";

const Hero = ({ setActiveSection }) => {
	const { ref, inView } = useInView({
		threshold: 0.4,
		// triggerOnce: false
	});

	useEffect(() => {
		if (inView) {
			setActiveSection("hero");
		}
	}, [inView, setActiveSection]);

	const resumePdfPath = "/Chinmay-Patel_resume.pdf";

	return (
		<motion.section
			ref={ref}
			id="hero"
			className="hero"
			variants={initialLoadFadeIn}
			initial="hidden"
			animate="visible"
		>
			<div className="hero__content">
				<div className="hero__text">
					<h1 className="hero__headline">Hi, I'm Chinmay.</h1>
					<h4 className="hero__headline4">I make code come alive.</h4>
					<p className="hero__intro">
						Full-Stack Developer | React, Node.js, AWS
					</p>
					<div className="hero__cta">
						<a
							href={resumePdfPath}
							className="btn btn--primary"
							target="_blank"
							rel="noopener noreferrer"
						>
							View Resume (PDF)
						</a>
					</div>
				</div>

				{profilePhoto && (
					<div className="hero__photo-container">
						<img
							src={profilePhoto}
							alt="Your Name - Professional Headshot"
							className="hero__photo"
						/>
					</div>
				)}
			</div>
		</motion.section>
	);
};

import PropTypes from "prop-types";
Hero.propTypes = {
	setActiveSection: PropTypes.func.isRequired,
};

export default Hero;
