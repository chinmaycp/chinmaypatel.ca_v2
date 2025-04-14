import { animate } from "motion";

export const sectionFadeIn = {
	hidden: { opacity: 0, y: 40 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut" },
	},
};

export const staggerContainer = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};

export const fastStaggerContainer = {
	...staggerContainer,
	visible: {
		...staggerContainer.visible,
		transition: {
			...staggerContainer.visible.transition,
			staggerChildren: 0.1,
		},
	},
};

export const fadeInUpItem = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.3,
			ease: "easeInOut",
		},
	},
};
