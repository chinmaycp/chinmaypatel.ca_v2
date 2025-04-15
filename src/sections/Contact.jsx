import React, { useEffect, useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { sectionFadeIn } from "../utils/animations";
import { useInView } from "react-intersection-observer";

const Contact = ({ setActiveSection }) => {
	const FORMSPREE_ENDPOINT = "https://formspree.io/f/xoqvkqoe";
	const [status, setStatus] = useState("idle");
	const [errorMessage, setErrorMessage] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();
		setStatus("submitting");
		setErrorMessage("");

		const form = event.target;
		const data = new FormData(form);

		try {
			const response = await fetch(FORMSPREE_ENDPOINT, {
				method: "POST",
				body: data,
				headers: {
					Accept: "application/json",
				},
			});

			if (response.ok) {
				setStatus("success");
				form.reset();
			} else {
				const responseData = await response.json();
				if (responseData.errors && responseData.errors.length > 0) {
					setErrorMessage(
						responseData.errors.map((err) => err.message).join(", ")
					);
				} else {
					setErrorMessage(
						"Oops! There was a problem submitting your form."
					);
				}
				setStatus("error");
			}
		} catch (error) {
			console.error("Form submission error:", error);
			setErrorMessage(
				"Oops! There was a network error. Please try again later."
			);
			setStatus("error");
		}
	};

	const { ref, inView } = useInView({
		threshold: 0.4,
	});

	useEffect(() => {
		if (inView) {
			setActiveSection("contact");
		}
	}, [inView, setActiveSection]);

	return (
		<motion.section
			ref={ref}
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
							<button
								type="submit"
								className="btn btn--primary"
								disabled={status === "submitting"}
							>
								{status === "submitting"
									? "Sending..."
									: "Send Message"}
							</button>
							{status === "success" && (
								<p className="form-status form-status--success">
									Thank you! Your message has been sent
									successfully.
								</p>
							)}
							{status === "error" && (
								<p className="form-status form-status--error">
									{errorMessage ||
										"Oops! Something went wrong. Please try again."}
								</p>
							)}
						</form>
					</div>
					<div className="contact__info-container">
						<h3>Contact Details</h3>
						<p>
							<a href="mailto:chinmaypatel.cp@gmail.com">
								chinmaypatel.cp@gmail.com
							</a>
						</p>
						<p>Based in: Toronto, Canada</p>
						<h3 className="contact__social-title">Find me on</h3>
						<div className="contact__social-links">
							<a
								href="https://github.com/chinmaycp"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="GitHub Profile"
								className="social-link"
							>
								<FaGithub />
							</a>
							<a
								href="https://linkedin.com/in/username"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="LinkedIn Profile"
								className="social-link"
							>
								<FaLinkedin />
							</a>
						</div>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

import PropTypes from "prop-types";
Contact.propTypes = {
	setActiveSection: PropTypes.func.isRequired,
};

export default Contact;
