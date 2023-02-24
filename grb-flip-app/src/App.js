import React, { useState } from "react";

import FlipCard from "./components/FlipCard";
import "./App.css";

function App() {
	const cards = Array.from({ length: 25 }, () => ({
		flipped: Math.random() < 0.5,
	}));
	return (
		<div className="container">
			<img
				src="https://i0.wp.com/www.kastela.com/wp-content/uploads/2021/04/02....jpg?resize=640%2C277&ssl=1"
				className="image"
			/>
			<div className="wrapper">
				{cards.map((card, index) => (
					<FlipCard key={index} flipped={card.flipped} />
				))}
			</div>
		</div>
	);
}

export default App;
