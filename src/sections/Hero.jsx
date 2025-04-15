import React, { useEffect } from "react";
import profilePhoto from "../assets/images/profile-photo-test.jpg";
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
					<h1 className="hero__headline">
						Fullstack Software Engineer building innovative web
						experiences.
					</h1>
					<p className="hero__intro">
						Passionate about crafting elegant solutions to complex
						problems. I focus on delivering seamless user
						experiences and writing clean, efficient code. Let's
						build something amazing together.
					</p>
					<div className="hero__cta">
						<a href="#projects" className="btn btn--primary">
							View My Work
						</a>
						<a href="#contact" className="btn btn--secondary">
							Get In Touch
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
