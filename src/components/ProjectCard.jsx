import React from "react";
import PropTypes from "prop-types";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project }) => {
	const { id, title, imageUrl, description, techStack, liveUrl, repoUrl } =
		project;

	return (
		<div className="project-card">
			<div className="project-card__image-container">
				<img
					src={imageUrl}
					alt={`Screenshot of ${title} project`}
					className="project-card__image"
					loading="lazy"
				/>
			</div>
			<div className="project-card__content">
				<h3 className="project-card__title">{title}</h3>
				<p className="project-card__description">{description}</p>
				<div className="project-card__tech-stack">
					{techStack.map((tech, index) => (
						<span key={index} className="tech-tag">
							{tech}
						</span>
					))}
				</div>
				<div className="project-card__links">
					{liveUrl && (
						<a
							href={liveUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="btn btn--small btn--outline"
							aria-label={`Live demo of ${title}`}
						>
							<FaExternalLinkAlt aria-hidden="true" /> Live Demo
						</a>
					)}
					{repoUrl && (
						<a
							href={repoUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="btn btn--small btn--outline"
							aria-label={`GitHub repository for ${title}`}
						>
							<FaGithub aria-hidden="true" /> View Code
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

ProjectCard.propTypes = {
	project: PropTypes.shape({
		id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
			.isRequired,
		title: PropTypes.string.isRequired,
		imageUrl: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
		liveUrl: PropTypes.string,
		repoUrl: PropTypes.string,
	}).isRequired,
};

export default ProjectCard;
