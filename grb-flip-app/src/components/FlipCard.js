import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

function FlipCard({ flipped }) {
	const [flip, setFlip] = useState(flipped);
	const handleClick = () => {
		setFlip(!flip);
	};
	return (
		<ReactCardFlip isFlipped={flip} flipDirection="vertical">
			<div
				style={{
					width: "50px",
					height: "50px",
					padding: "10px",
					background: "red",
				}}
				onClick={handleClick}
			></div>

			<div
				style={{
					width: "50px",
					height: "50px",
					padding: "10px",
					background: "grey",
				}}
				onClick={handleClick}
			></div>
		</ReactCardFlip>
	);
}

export default FlipCard;
