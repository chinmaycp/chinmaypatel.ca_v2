import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Import social icons
import { motion } from "framer-motion";
import { sectionFadeIn } from "../utils/animations";

const Contact = () => {
	const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_UNIQUE_FORM_ID";

	return (
		<motion.section
			id="contact"
			className="contact"
			variants={sectionFadeIn}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.2 }}
		>
			<div className="container">
				<h2 className="section__title">Get In Touch</h2>
				<p className="contact__subtitle">
					Interested in working together or have a question? Send me a
					message!
				</p>

				<div className="contact__content-wrapper">
					{/* Contact Form */}
					<div className="contact__form-container">
						<form
							action={FORMSPREE_ENDPOINT}
							method="POST"
							className="contact__form"
						>
							<div className="form-group">
								<label htmlFor="name">Name</label>
								<input
									type="text"
									id="name"
									name="name"
									autoComplete="off"
									required
								/>
							</div>
							<div className="form-group">
								<label htmlFor="email">Email</label>
								<input
									type="email"
									id="email"
									name="email"
									autoComplete="off"
									required
								/>
								{/* Optional: Add hidden field for Formspree's AJAX submit if needed later,
                    but standard submit works fine initially. */}
								{/* <input type="hidden" name="_replyto" value="email" /> */}
							</div>
							<div className="form-group">
								<label htmlFor="message">Message</label>
								<textarea
									id="message"
									name="message"
									rows="6"
									required
								></textarea>
							</div>
							<button type="submit" className="btn btn--primary">
								Send Message
							</button>
						</form>
					</div>

					{/* Contact Info & Social Links */}
					<div className="contact__info-container">
						<h3>Contact Details</h3>
						<p>
							<a href="mailto:your.email@example.com">
								your.email@example.com
							</a>{" "}
							{/* Replace with your email */}
						</p>
						<p>Based in: Brampton, Ontario, Canada</p>{" "}
						{/* Or your preferred location info */}
						<h3 className="contact__social-title">Find me on</h3>
						<div className="contact__social-links">
							<a
								href="https://github.com/yourusername" // Replace with your GitHub profile URL
								target="_blank"
								rel="noopener noreferrer"
								aria-label="GitHub Profile"
								className="social-link"
							>
								<FaGithub />
							</a>
							<a
								href="https://linkedin.com/in/yourusername" // Replace with your LinkedIn profile URL
								target="_blank"
								rel="noopener noreferrer"
								aria-label="LinkedIn Profile"
								className="social-link"
							>
								<FaLinkedin />
							</a>
							{/* Add other relevant links (e.g., Twitter, Dev.to) if desired */}
						</div>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default Contact;
