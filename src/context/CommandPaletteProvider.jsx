import React, { useState, useEffect, useMemo } from "react";
import { Command } from "cmdk";
import PropTypes from "prop-types";

export const CommandPaletteProvider = ({ actions, children }) => {
	const [openCmdk, setOpenCmdk] = useState(false);

	useEffect(() => {
		const down = (e) => {
			if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setOpenCmdk((open) => !open);
			}
		};
		document.addEventListener("keydown", down);
		return () => document.removeEventListener("keydown", down);
	}, []);

	const actionSections = useMemo(() => {
		const grouped = {};
		actions.forEach((action) => {
			if (!action?.section) return;
			if (!grouped[action.section]) {
				grouped[action.section] = [];
			}
			grouped[action.section].push(action);
		});
		return Object.entries(grouped);
	}, [actions]);

	const handleSelect = (actionPerform) => {
		if (typeof actionPerform === "function") {
			actionPerform();
		}
		setOpenCmdk(false);
	};

	return (
		<>
			{children}
			<Command.Dialog
				open={openCmdk}
				onOpenChange={setOpenCmdk}
				label="Global Command Menu"
				className="cmdk-dialog"
			>
				<div className="cmdk-container">
					<Command.Input
						placeholder="Type a command or search..."
						className="cmdk-input"
					/>
					<Command.List className="cmdk-list">
						<Command.Empty className="cmdk-empty">
							No results found.
						</Command.Empty>

						{actionSections.map(([sectionName, sectionActions]) => (
							<Command.Group
								key={sectionName}
								heading={sectionName}
								className="cmdk-group"
							>
								{sectionActions.map((action) => (
									<Command.Item
										key={action.id}
										onSelect={() =>
											handleSelect(action.perform)
										}
										value={action.name}
										className="cmdk-item"
									>
										<div className="cmdk-item-info">
											<span>{action.name}</span>
										</div>
										{action.shortcut?.length ? (
											<div
												className="cmdk-shortcut"
												aria-hidden
											>
												{action.shortcut.map((key) => (
													<kbd key={key}>{key}</kbd>
												))}
											</div>
										) : null}
									</Command.Item>
								))}
							</Command.Group>
						))}
					</Command.List>
				</div>
			</Command.Dialog>
		</>
	);
};

CommandPaletteProvider.propTypes = {
	actions: PropTypes.array.isRequired,
	children: PropTypes.node.isRequired,
};
