import React from "react";
import profilePhoto from "../assets/images/profile-photo-test.jpg";
import { motion } from "framer-motion";

const sectionFadeIn = {
	hidden: { opacity: 0, y: 40 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut" },
	},
};

const Hero = () => {
	return (
		<motion.section
			id="hero"
			className="hero"
			variants={sectionFadeIn}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.2 }}
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
						{/* Add more about your specific interests or goals if desired */}
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

				{/* Optional Photo Section */}
				{profilePhoto && ( // Conditionally render if photo is imported
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

export default Hero;
